class GoodObstacle extends Obstacle {

    
    constructor(gameScreen, startPosition){
        let goodObstacleImg = ["../images/avocado.png",
        "../images/orange.png",
        "../images/apple.png"
        ]
    
        super(gameScreen,goodObstacleImg[ Math.floor(Math.random() * goodObstacleImg.length)], startPosition);
    }

    // updatePosition(){

    // }

    // move(){

    // }
}