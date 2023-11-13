/**
 * The Game class will contain
 * - game loop -> will refresh the game with current status of the player.
 * - will contain the logic to win lose or go to next level situation.
 * 
 * 
 */
class Game {

    constructor(){
        this.instructionScreen = document.getElementById('instructions');
        
        this.gameContainer = document.getElementById('game-container');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndOrLevelScreen = document.getElementById('level-or-game-end');
        this.width = "100vw";
        this.height = "100vh";
        //Player 
        this.player = new Player(this.gameScreen,"../images/therunningman.png");

        //obstacle container
        this.obstacles = [];


        this.isGameOver = false;
          //Game properties
        
    }

    start(){
        this.gameContainer.style.width = `${this.width}vw`;
        this.gameContainer.style.height = `${this.height}vh`;
        this.instructionScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';
        this.gameLoop();
        
    }

    gameLoop(){
        if(this.isGameOver){
            return;
        }
        // console.log('game loop');
        this.update()
        //Invoke game Loop
        window.requestAnimationFrame(()=> this.gameLoop());
    }

    update(){
        //moves the player
        this.player.move();   
        
        //create/remove obstacle
        console.log("size of obstacles array", this.obstacles.length);
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();
            if (this.didCollide(obstacle)) {
              obstacle.updateStatistics(this.player); 
              obstacle.element.remove();
              console.log("obstacle collided and removed");
              this.obstacles.splice(i, 1);
              i--;
            }
            else if (obstacle.top > 42) {
              obstacle.element.remove();
              console.log("obstacle did not collide and removed");
              this.obstacles.splice(i, 1);
              i--;
                 }
          }
      
        //Game end logic
        if(this.player.health <= 0){
          this.player.health = 0;
          this.endGame();
        } else if(this.player.health < 60 && this.player.money === 0){
          this.endGame();
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
    if (random > 0.80 && random <= 0.98 && this.obstacles.length < 2) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      console.log("random2", randomStartPosition);
      this.obstacles.push(new GoodObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0 && random < 0.20 && this.obstacles.length < 2) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      console.log("random", randomStartPosition);
      this.obstacles.push(new BadObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0.98 && this.obstacles.length < 2) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      console.log("random", randomStartPosition);
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

  endGame() {
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen

    this.gameIsOver = true; // cancel the execution of gameLoop()

    // Hide game container
    this.gameContainer.style.display = 'flex';
    // Show end game screen
    this.gameEndOrLevelScreen.style.display = "block";
  }
    

  /**
   * Case 1
   * when player collides with money -> add game.money = game.money + obstacle.cost;
   * 
   * Case 2
   * when player collides with Bad obstacle -> subtract game.money-obstacle.cost  , subtract game.heath - obstacle.liability
   * 
   * Case 3
   * when player collides with Good obstacle --> add  game.money + obstacle.cost  , game.health + obstacle.boost
   * 
   * 
   * Case 4
   * 
   * 
   */
}