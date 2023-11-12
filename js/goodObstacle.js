class GoodObstacle extends Obstacle {

    
    constructor(gameScreen, startPosition){
        const goodObstacleImg = [
            {
                image: "../images/avocado.png",
                cost: 15,
                boost: 20
            }, 
            {
                image: "../images/orange.png",
                cost: 5,
                boost: 10
            },
            {
                image: "../images/apple.png",
                cost: 10,
                boost: 15
            }
        ]
    
        super(gameScreen,goodObstacleImg[ Math.floor(Math.random() * goodObstacleImg.length)], startPosition);
    }

    updateStatistics(game){
        console.log("okokokokokokokok")
        console.log("game", game);
    }
}