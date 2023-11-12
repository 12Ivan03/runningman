
class Obstacle {
    constructor(gameScreen, obstacle, startPosition){
        this.gameScreen = gameScreen
        this.top = 0;

        //save the initial value to pass it to the move()
        this.startPosition = startPosition;
        
        this.setStartingPositionOfObstacle(startPosition);


        this.width = 10; 
        this.height = 10;
        this.element = document.createElement('img');

        this.element.src = obstacle.image;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}vw`;
        this.element.style.top = `${this.top}vh`;
        this.element.style.zIndex = "5"
        

        //make the element
        this.gameScreen.appendChild(this.element);

        // take points / make it in the game. update method /
    }

    setStartingPositionOfObstacle(startPosition) {
        if (startPosition === 0) {
            this.left = 38;
        } else if (startPosition === 1) {
            this.left = 42;
        } else if (startPosition === 2) {
            this.left = 47.5;
        } else if (startPosition === 3) {
            this.left = 53;
        } else {
            this.left = 58;
        }
    }

    move(){
         if(this.startPosition === 0) {
             this.left -= 0.09
         } else if(this.startPosition === 1){
             this.left -= 0.04
         } else if(this.startPosition === 2) {
             this.left -= 0.002
         } else if(this.startPosition === 3) {
             this.left += 0.04
         } else {
             this.left += 0.09
         }
 
         this.top += 0.2;
         
         this.width += 0.15;
         this.height += 0.15;
         this.updatePosition();
     }
 
     updatePosition(){
         this.element.style.left = `${this.left}vw`;
         this.element.style.top = `${this.top}vh`;
         this.element.style.width = `${this.width}px`;
         this.element.style.height =`${this.height}px`;
     }

     updateStatistics(game){
        console.log("ok")
     }
}

