/**
 * The Game class will contain
 * - game loop -> will refresh the game with current status of the player.
 * - will contain the logic to win lose or go to next level situation.
 * 
 */
class Game {

    constructor(){
        this.instructionScreen = document.getElementById('instructions');
        
        this.gameContainer = document.getElementById('game-container');
        this.gameScreen = document.getElementById('game-screen');
        this.width = "100vw";
        this.height = "100vh";
        //Player 
        this.player = new Player(this.gameScreen,"../images/therunningman.png");

        //obstacle container
        this.obstacles = [];

        this.clounds = []

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
            // const scoreObs = this.obstacle[i].score.health
            // const scoreObs = this.obstacle[i].score.money

           
            if(obstacle instanceof BadObstacle){
              console.log("instance of BadObstacle")
            } else if (obstacle instanceof GoodObstacle){
              console.log("instance of good obstacle")
            } else if (obstacle instanceof Money){
              console.log("instance of Money");
            }

            obstacle.move();
            // console.log("obstacle", obstacle);
            if (this.didCollide(obstacle)) {
              obstacle.updateStatistics(this.player); 
              obstacle.element.remove();
              console.log("obstacle collided and removed");
              this.obstacles.splice(i, 1);
              this.health -= 5
              document.getElementById('health').textContent -= this.health;
              //this.health--;
              //document.getElementById('health').textContent -= this.health;
              i--;
            }
            else if (obstacle.top > 41) {
              obstacle.element.remove();
              console.log("obstacle did not collide and removed");
              this.obstacles.splice(i, 1);
              i--;
                 }
          }
      
        // if (this.health === 0) {
        //     this.endGame();
        // }
        
        document.getElementById('health').textContent = this.player.health;
        document.getElementById('money').textContent = this.player.money;
        this.addObstacle();
    }

  addObstacle() {
    const random = Math.random();
    if (random > 0.80 && random <= 0.98 && this.obstacles.length < 1) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      console.log("random2", randomStartPosition);
      this.obstacles.push(new GoodObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0 && random < 0.20 && this.obstacles.length < 1) {
      let randomStartPosition = Math.floor(Math.random() * 5);
      console.log("random", randomStartPosition);
      this.obstacles.push(new BadObstacle(this.gameScreen, randomStartPosition));
    }

    if (random > 0.98 && this.obstacles.length < 1) {
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