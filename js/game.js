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
        this.width = "100vw";
        this.height = "100vh";
        //Player 
        this.player = new Player(this.gameScreen,"../images/therunningman.png");

        //obstacle container
        this.obstacles = [];

        //Game properties
        this.distance = 20; // Level1-20kms
        this.speed = 1/3; 
        //player property 
        this.health = 100;
        this.money = 25;

        this.isGameOver = false;
        
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
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            // const scoreObs = this.obstacle[i].score.health
            // const scoreObs = this.obstacle[i].score.money

            obstacle.move();
            // console.log("obstacle", obstacle);
            if (this.player.didCollide(obstacle)) {
              obstacle.element.remove();
              this.obstacles.splice(i, 1);
            
              //this.health--;
              //document.getElementById('health').textContent -= this.health;
              i--;
            }
            else if (obstacle.top > 42) {
              obstacle.element.remove();
              this.obstacles.splice(i, 1);
              //document.getElementById('score').textContent = this.score;
              i--;
            }
          }
      
        if (this.health === 0) {
            this.endGame();
        }

          // new loop / decide which of the 3 Good obscatles should be initialized. No3 
          // new loop / decide which of the 3 Bad obscatles should be initialized. No10
          // new loop / decide which of the 3 Money obscatles should be initialized. No5

          //store in array... push 18 

          // from this array Math.random to choose which to initilize. 
        const goodObstacleImg = ["../images/avocado.png",
                    "../images/orange.png",
                    "../images/apple.png"
                   ]

        const badObstacleImg = ["../images/burger.png",
                   "../images/donut.png",
                   "../images/fries.png"
                  ]

        const moneyObstacleImg = ["../images/coin.png",
                    "../images/coin3.png",
                    "../images/coin15.png"
                   ]


    
        //good Random obsticals
        const randomGoodImg = Math.floor(Math.random() * goodObstacleImg.length);

               
        if (Math.random() > 0.98 && this.obstacles.length < 5) {   // at any given point in time , obstacles array is containing only 1 object
            // this.obstacles.push(new Obstacle(this.gameScreen));
            // let goodObstacle = new GoodObstacle(this.gameScreen, "../images/avocado.png");
          //  console.log("goodObstacle", new GoodObstacle(this.gameScreen, "../images/avocado.png"));
            let randomPosition = Math.floor(Math.random()*5);
            console.log("random2", randomPosition);
            this.obstacles.push(new GoodObstacle(this.gameScreen, goodObstacleImg[randomGoodImg], randomPosition));
        }

        // bad random obsticals
        if (Math.random() > 0.98 && this.obstacles.length < 5) { 
            let randomPosition = Math.floor(Math.random()*5);
            console.log("random", randomPosition);
            this.obstacles.push(new GoodObstacle(this.gameScreen, badObstacleImg[randomGoodImg], randomPosition));
        }

        //random coins 
        if (Math.random() > 0.98 && this.obstacles.length < 5) { 
            let randomPosition = Math.floor(Math.random()*5);
            console.log("random", randomPosition);
            this.obstacles.push(new GoodObstacle(this.gameScreen, moneyObstacleImg[randomGoodImg], randomPosition));
        }

          
    }

    // getObsImages(){
    //   return ["../images/avocado.png",
    //           "../images/orange.png",
    //           "../images/apple.png"
    //          ]
    // }

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
    
}