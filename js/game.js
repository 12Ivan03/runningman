/**
 * The Game class will contain
 * - game loop -> will refresh the game with current status of the player.
 * - will contain the logic to win lose or go to next level situation.
 * 
 */
class Game {

  constructor(health, money, level, sound) {
    this.instructionScreen = document.getElementById('instructions');

    this.gameContainer = document.getElementById('game-container');
    this.gameScreen = document.getElementById('game-screen');
    this.gameEndOrLevelScreen = document.getElementById('level-or-game-end');
    // this.width = "100vw";
    // this.height = "100vh";
    //Player 
    this.player = new Player(this.gameScreen, "./images/therunningman.png", health, money);

    //obstacle container
    this.obstacles = [];

    this.isGameOver = false;
    //Game properties

    this.level = level;
    this.sound = sound;

    this.middleScreenAndWinSound = new Audio("../music-game/4win-screen.mp3");
    this.middleScreenAndWinSound.setVolume(0.2);
    this.middleScreenAndWinSound.loop();

    this.loseScreenSound =  new Audio("../music-game/6Fluffing-a-Duck-Lse-Screen.mp3");
    this.loseScreenSound.setVolume(0.2);
    this.loseScreenSound.loop();

  }

  start() {
    this.sound.play();  
    this.gameEndOrLevelScreen.style.display = "none";
    this.instructionScreen.style.display = 'none';
    this.gameContainer.style.display = 'flex';

    // Update the distance, health every second but speed is static value.
    //Level 1 - is played for 60 seconds, Level-2 is played for 90 seconds.
    if (this.level === 1) {
      //extra 5 seconds to avoid race condition between setInterval and setTimeout.
      // In any case setTimeout should finish after setInterval makes the distance = 0
      const levelOneTime = 65;
      const distanceInterval = setInterval(() => this.updateDistanceAndHealth(1/3), 1000); // 20Kms/60seconds = 1/3
      setTimeout(function () {
        clearInterval(distanceInterval);
      }, levelOneTime * 1000);
      this.player.speed = this.player.distance / 60;
    } else if (this.level === 2) {

      this.player.distance = 40;
      document.getElementById('distance').textContent = `${this.player.distance}`;
      const levelOneTime = 100;
      const distanceInterval = setInterval(() => this.updateDistanceAndHealth(4/9), 1000); // 40kms/90 seconds = 4/9
      setTimeout(function () {
        clearInterval(distanceInterval);
      }, levelOneTime * 1000);
      this.player.speed = this.player.distance / 90;
    }

    document.getElementById('speed').textContent = `${this.player.speed.toFixed(2)}`;
    this.gameLoop();
  }

  updateDistanceAndHealth(reduceDistanceBy) {
    this.player.distance -= reduceDistanceBy;
    if (this.player.distance <= 0) {
      this.player.distance = 0;
    }

    this.player.health -= 5 / 6;
    if (this.player.health <= 0) {
      this.player.health = 0;
    }
  }

  gameLoop() {
    if (this.isGameOver) {
      return;
    }
    // console.log('game loop');
    // this.player.distance -= 1/3;
    this.update()
    //Invoke game Loop
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    document.getElementById('distance').textContent = `${this.player.distance.toFixed(2)}`;
    //moves the player
    this.player.move();

    //create/remove obstacle
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.didCollide(obstacle)) {
        obstacle.updateStatistics(this.player);
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
      else if (obstacle.top > 41) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    //Game end logic
    this.executeWinLoseGameLogic();

    if (this.player.health > 100) {
      this.player.health = 100;
    }
    if (this.player.money <= 0) {
      this.player.money = 0;
    }
    document.getElementById('health').textContent = `${this.player.health.toFixed(2)}`;
    document.getElementById('money').textContent = `${this.player.money}`;
    this.addObstacle();
  }

  executeWinLoseGameLogic() {
    if (this.player.health <= 0) {
      this.player.health = 0;
      this.isGameOver = true;
      this.endGame();
    } else if (this.player.health < 60 && this.player.distance === 0 && this.level === 1) {
      this.isGameOver = true;
      this.endGame();
    } else if (this.player.health >= 60 && this.player.distance === 0 && this.level === 1) {
      this.isGameOver = true;
      this.nextLevel();
    } else if (this.player.health < 80 && this.player.distance === 0 && this.level === 2) {
      this.isGameOver = true;
      this.endGame();
    } else if (this.player.health >= 80 && this.player.distance === 0 && this.level === 2) {
      this.winGame();
    }
  }

  addObstacle() {
    const random = Math.random();
    let numberOfObstacles = 3;
    if (this.level === 2) {
      numberOfObstacles = 7;
    }

    if (random > 0 && random <= 0.5 && this.obstacles.length < numberOfObstacles) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      this.obstacles.push(new GoodObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0.80 && random < 0.88 && this.obstacles.length < numberOfObstacles) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      this.obstacles.push(new BadObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0.96 && this.obstacles.length < numberOfObstacles) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      this.obstacles.push(new Money(this.gameScreen, randomStartPosition));
    }
  }

  didCollide(obstacle) {
    const playerBoundaries = this.player.element.getBoundingClientRect();
    const obstacleBoundaries = obstacle.element.getBoundingClientRect();

    if (
      playerBoundaries.left < obstacleBoundaries.right &&
      playerBoundaries.right > obstacleBoundaries.left &&
      playerBoundaries.top < obstacleBoundaries.bottom &&
      playerBoundaries.bottom > obstacleBoundaries.top
    ) {
      return true;
    } else {
      return false;
    }

  }

  nextLevel() {
    this.sound.pause();
    this.middleScreenAndWinSound.play();

    document.getElementById('health-next-level').textContent = `${this.player.health.toFixed(2)}`;
    document.getElementById('money-next-level').textContent = `${this.player.money}`;
    document.getElementById('speed-next-level').textContent = `${this.player.speed.toFixed(2)}`;
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
    this.gameContainer.style.display = 'none';
    this.gameEndOrLevelScreen.style.display = "flex";
  }   
  
  winGame() {
    this.sound.pause();
    this.middleScreenAndWinSound.play();

    const preloadWinBangImg = new Image();
    preloadWinBangImg.src = "./images/winBang.png";

    this.isGameOver = true;

    this.gameContainer.style.display = 'none';
    this.gameEndOrLevelScreen.style.display = "flex";

    const nextLevelBtn = document.getElementById('level-or-game-end');
    nextLevelBtn.firstElementChild.style.display = "none";

    const congratsMessage = document.createElement('p');
    congratsMessage.setAttribute("class","win-text")
    congratsMessage.textContent = "Congratulations";
    
    const youWinMessage = document.createElement('p');
    youWinMessage.setAttribute("class","win-text")
    youWinMessage.textContent = "YOU WON";

    nextLevelBtn.appendChild(congratsMessage);
    nextLevelBtn.appendChild(youWinMessage);

    this.gameEndOrLevelScreen.style.justifyContent = "flex-end";
    this.gameEndOrLevelScreen.style.alignContent = "center"

    preloadWinBangImg.onload = ()=> {
      this.gameEndOrLevelScreen.style.backgroundColor = "aquamarine";
      this.gameEndOrLevelScreen.style.backgroundImage = `url(${preloadWinBangImg.src})`;
      this.gameEndOrLevelScreen.style.backgroundPosition = "cover";
    }
    // Error handling for image loading
    preloadWinBangImg.onerror = (error)=> {
      console.error("Error loading the winBang.png");
    }

    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
  }

  endGame() {
    this.sound.pause();
    this.loseScreenSound.play();

    const preloadGameOverImg = new Image();
    preloadGameOverImg.src = "./images/GameOverBang2.png";

    this.isGameOver = true; // cancel the execution of gameLoop()

    // Hide game container
    this.gameContainer.style.display = 'none';
    // Show end game screen
    this.gameEndOrLevelScreen.style.display = "flex";
    // End creen changes
    const nextBtn = document.getElementById('level-or-game-end');
    nextBtn.firstElementChild.style.display = "none";
    this.gameEndOrLevelScreen.style.justifyContent = "flex-end";

    preloadGameOverImg.onload = ()=>{
      this.gameEndOrLevelScreen.style.backgroundImage = `url(${preloadGameOverImg.src})`;
      this.gameEndOrLevelScreen.style.backgroundPosition = "cover"
      this.gameEndOrLevelScreen.style.backgroundColor = "blue";
    };

    // Error handling for image loading
    preloadWinBangImg.onerror = (error)=> {
      console.error("Error loading the GameOverBang2.png");
    }

    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
  }

}