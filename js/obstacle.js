
class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen
        this.top = 0;
        this.left = 45; // random on the rode.. // update the left
        this.width = 5; 
        this.height = 5;
        this.element = document.createElement('img');

        this.element.src = "../images/avocado.png";
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


    //score(){
//
   // }
    move(){
        this.top += 0.1;
        this.width += 0.1;
        this.height += 0.1;
        this.updatePosition();
    }


}

