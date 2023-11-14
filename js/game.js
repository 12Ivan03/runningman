/**
 * The Game class will contain
 * - game loop -> will refresh the game with current status of the player.
 * - will contain the logic to win lose or go to next level situation.
 * 
 */
class Game {

    constructor(health, money){
        this.instructionScreen = document.getElementById('instructions');
        
        this.gameContainer = document.getElementById('game-container');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndOrLevelScreen = document.getElementById('level-or-game-end');
        // this.width = "100vw";
        // this.height = "100vh";
        //Player 
        this.player = new Player(this.gameScreen,"../images/therunningman.png",health, money);

        //obstacle container
        this.obstacles = [];

        this.isGameOver = false;
          //Game properties
        
    }

    start(){
        // this.gameContainer.style.width = `${this.width}vw`;
        // this.gameContainer.style.height = `${this.height}vh`;
        this.gameEndOrLevelScreen.style.display = "none";
        this.instructionScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';

        // Update the distance every second
        const levelOneTime = 65;
        const distanceInterval = setInterval(() => this.updateDistance(),1000);
        const gameOver = false;
        setTimeout(function(){
          clearInterval(distanceInterval);
          console.log("cancelling timer")
        }, levelOneTime*1000);
        this.player.speed = this.player.distance/levelOneTime;
        document.getElementById('speed').textContent = this.player.speed.toFixed(2);
        this.gameLoop();
    }

    updateDistance(){
      this.player.distance -= 1/3;
      if(this.player.distance <= 0){
        this.player.distance = 0;
      }
    }

    gameLoop(){
        if(this.isGameOver){
            return;
        }
        // console.log('game loop');
        // this.player.distance -= 1/3;
        this.update()
        //Invoke game Loop
        window.requestAnimationFrame(()=> this.gameLoop());
    }

    update(){
      document.getElementById('distance').textContent = `${this.player.distance.toFixed(2)}`;
      console.log("distance", this.player.distance);
      console.log("comparison", this.player.distance<=0)
  
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
        if(this.player.health <= 0){
          this.player.health = 0;
          this.gameIsOver = true;
          this.endGame();
        } else if(this.player.health < 60 && this.player.distance === 0){
          this.gameIsOver = true;
          this.endGame();
        } else if(this.player.health >= 60 && this.player.distance === 0){
          this.nextLevel();
        }

        if(this.player.health > 100){
          this.player.health = 100;
        }
        if(this.player.money <= 0){
          this.player.money = 0;
        }
        document.getElementById('health').textContent = this.player.health;
        document.getElementById('money').textContent = this.player.money;

     
  
        this.addObstacle();
    }

  addObstacle() {
    const random = Math.random();
    if (random > 0.80 && random <= 0.98 && this.obstacles.length < 10) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      this.obstacles.push(new GoodObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0 && random < 0.20 && this.obstacles.length < 10) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      this.obstacles.push(new BadObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0.98 && this.obstacles.length < 10) {
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

  nextLevel(){
    document.getElementById('health-next-level').textContent = this.player.health;
    document.getElementById('money-next-level').textContent = this.player.money;
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen
    this.gameContainer.style.display = 'none';
    this.gameEndOrLevelScreen.style.display = "flex";
    startGameBtn.click()
  }    

  endGame() {
    this.gameIsOver = true; // cancel the execution of gameLoop()

    // Hide game container
    this.gameContainer.style.display = 'none';
    // Show end game screen
    this.gameEndOrLevelScreen.style.display = "flex";
    // End creen changes
    const nextBtn = document.getElementById('level-or-game-end');
    nextBtn.firstElementChild.style.display = "none";
    nextBtn.lastChild.style.top = "70vh"
    this.gameEndOrLevelScreen.style.backgroundImage = "url(../images/GameOverBang2.png)";
    this.gameEndOrLevelScreen.style.backgroundPosition = "80vh 80vw"
    this.gameEndOrLevelScreen.style.backgroundColor = "blue";
    
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen


  }

}