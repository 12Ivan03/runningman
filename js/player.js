class Player {

    constructor(gameScreen, imgSrc){
        this.top = 25;
        this.left = 36;
        this.gameScreen = gameScreen;
        
        //player image
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.alt = "player image";
        this.element.style.top = `${this.top}vh`;
        this.element.style.left = `${this.left}vw`;
        this.element.className = "player";
        this.element.style.width = "4rem"
        this.element.style.height = "8rem"
        this.gameScreen.appendChild(this.element);

        //player movement
        this.directionX = 0;
        this.directionY = 0;

      

    }

    move(){
        this.left += this.directionX;
        this.top += this.directionY;

        this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}vw`;
        this.element.style.top = `${this.top}vh`;
        // console.log('player position', this.element.getBoundingClientRect())
        this.directionX = 0;
        this.directionY = 0;
    }

    didCollide(obstacle) {
        const playerBoundaries = this.element.getBoundingClientRect();
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