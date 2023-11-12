class Money extends Obstacle {


    constructor(gameScreen, startPosition){
       const moneyObstacleImg = [
        {
            image: "../images/coin.png",
            cost: 1
        }, 
        {
            image: "../images/coin3.png",
            cost: 10
        },
        {
            image: "../images/coin15.png",
            cost: 20
        }
        ]

        super(gameScreen,  moneyObstacleImg[Math.floor(Math.random() * moneyObstacleImg.length)] , startPosition);
    }
    
    updateStatistics(game){
        console.log("okokokokokokokok")
        console.log("game", game);
    }
}