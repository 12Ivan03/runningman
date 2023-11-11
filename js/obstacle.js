
class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen
        this.top = -1;
        this.left = 45;
        this.width = 3; 
        this.height = 3;
        this.element = document.createElement('img');

        //element's dimentiones 
        this.element.src = "../images/avocado.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}vw`;
        this.element.style.height = `${this.height}vh`;
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
    }


    move(){
        this.top += 1;
        this.updatePosition();
    }


}

