class BadObstacle extends Obstacle {
    
    constructor(gameScreen, imgSrc, startPosition){
        super(gameScreen, imgSrc, startPosition);
    }

    score(){
        health = -1
    }
}