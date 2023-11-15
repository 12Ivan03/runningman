class Player {

    constructor(gameScreen, imgSrc, health, money){
        this.top = 80;
        this.left = 44;
        this.gameScreen = document.getElementById('game-container');
        
        //player image
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.alt = "player image";
        this.element.style.top = `${this.top}vh`;
        this.element.style.left = `${this.left}vw`;
        this.element.className = "player";
        this.element.style.width = "4rem"
        this.element.style.height = "8rem"
        this.element.style.zIndex = "99"
        this.gameScreen.appendChild(this.element);

        //player movement
        this.directionX = 0;
        this.directionY = 0;

         //Game properties
         this.distance = 20; // Level1-20kms
         this.speed = 1/3; 
         //player property 
         this.health = health;
         this.money = money;
    }

    move(){
      this.left += this.directionX;
      this.top += this.directionY;
      
      // Left and right 
      if (this.left < 4) {
        this.left = 4; //left
      }
       
      if (this.left > 91) {
        this.left = 91; //right
      }
    
      // up and down
          
      if (this.top > 80) {
        this.top = 80; //down
      }
          
      if (this.top < 67) {
        this.top = 67; //up
      } 
      
      // up - right <<>> up-left
              //left
      if (this.top < 73 && this.left < 9)  {
        this.left = 9
      }
              //right
      if (this.top < 75 && this.left > 84)  {
        this.left = 84;
      }

      this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}vw`;
        this.element.style.top = `${this.top}vh`;
        // console.log('player position', this.element.getBoundingClientRect())
        this.directionX = 0;
        this.directionY = 0;
    }

}