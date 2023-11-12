class Player {

    constructor(gameScreen, imgSrc){
        this.top = 30;
        this.left = 38;
        this.gameScreen = document.getElementById('game-screen');
        
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
         this.health = 100;
         this.money = 25;
      

    }

    move(){
      this.left += this.directionX;
      this.top += this.directionY;
      
     
      if (this.left < 3) {
        this.left = 3;
      }
    
      if (this.top < 17) {
        this.top = 17;
      } 
      
      if (this.top < 26 && this.left < 7 )  {
        this.left = 7
      }

      if (this.top < 26 && this.left > 85 )  {
        this.left = 85
      }
     
      if (this.left > 90) {
        this.left = 90;
      }
    
      if (this.top > 32) {
        this.top = 32;
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