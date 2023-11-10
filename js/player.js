class Player {

    constructor(gameScreen, imgSrc){
        this.gameScreen = gameScreen;
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.className = "player";
        this.gameScreen.appendChild(this.element);
    }
}