
class Obstacle {
    constructor(gameScreen, imgSrc, startPosition){
        this.gameScreen = gameScreen
        this.top = 0;

        //save the initial value to pass it to the move()
        this.startPosition = startPosition;
        
        if(startPosition === 0){
            console.log('startPosition')
            this.left = 38;
        } else if(startPosition === 1){
            console.log('startPosition')
            this.left = 42;
        } else if(startPosition === 2){
            console.log('startPosition')
            this.left = 47.5;
        } else if(startPosition === 3){
            console.log('startPosition')
            this.left = 53;
        } else {
            this.left = 58;
            console.log('startPosition')
        }


        this.width = 10; 
        this.height = 10;
        this.element = document.createElement('img');

        this.element.src = imgSrc;
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

    updatePosition(){
        this.element.style.left = `${this.left}vw`;
        this.element.style.top = `${this.top}vh`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height =`${this.height}px`;
    }

    move(){

        if(this.startPosition === 0) {
            console.log('change1')
            this.left -= 0.09
        } else if(this.startPosition === 1) {
            console.log('change12')
            this.left -= 0.04
        } else if(this.startPosition === 2) {
            console.log('change13')
            this.left -= 0.002
        } else if(this.startPosition === 3) {
            console.log('change14')
            this.left += 0.04
        } else {
            console.log('change15')
            this.left += 0.09
        }
        //this.left -= 0.09; //for left/right

        this.top += 0.1;
        
        this.width += 0.1;
        this.height += 0.1;
        this.updatePosition();
    }


}

