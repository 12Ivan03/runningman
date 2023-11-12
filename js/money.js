class Money extends Obstacle {


    constructor(gameScreen, startPosition){
        let moneyObstacleImg = ["../images/coin.png",
        "../images/coin3.png",
        "../images/coin15.png"
       ];

        super(gameScreen,  moneyObstacleImg[Math.floor(Math.random() * moneyObstacleImg.length)] , startPosition);
    }
    
    // updatePosition(){

    // }

    // move(){

    // }
}