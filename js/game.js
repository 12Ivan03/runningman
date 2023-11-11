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
        this.width = '100vw';
        this.height = '100vh';
        //Player 
        this.player = new Player(this.gameScreen,"../images/therunningman.png");

        //obstacle container
        this.obstacles = [];

        //Game properties
        this.health = 100;
        this.distance = 20; // Level1-20kms
        this.speed = 1/3; 
        this.money = 25;

        this.isGameOver = false;
        
    }

    start(){
        this.gameContainer.style.width = `${this.width}px`;
        this.gameContainer.style.height = `${this.height}px`;
        this.instructionScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';
        this.gameLoop();
        
    }

    gameLoop(){
        if(this.isGameOver){
            return;
        }
        console.log('game loop');
        this.update()
        //Invoke game Loop
        window.requestAnimationFrame(()=> this.gameLoop());
    }

    update(){
        this.player.move();   
        
        // for (let i = 0; i < this.obstacles.length; i++) {
        //     const obstacle = this.obstacles[i];
        //     obstacle.move();
      
        //     if (this.player.didCollide(obstacle)) {
        //       obstacle.element.remove();
        //       this.obstacles.splice(i, 1);
        //       this.lives--;
        //       document.getElementById('lives').textContent = this.lives;
        //       i--;
        //     }
        //     else if (obstacle.top > this.height) {
        //       this.score++;
        //       obstacle.element.remove();
        //       this.obstacles.splice(i, 1);
        //       document.getElementById('score').textContent = this.score;
        //       i--;
        //     }
        //   }
      
          if (this.health === 0) {
            this.endGame();
          }
      
          if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));
          }
    }

    
}