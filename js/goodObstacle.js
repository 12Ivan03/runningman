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
        const randomGoodObstacle = goodObstacleImg[ Math.floor(Math.random() * goodObstacleImg.length)];
        super(gameScreen,randomGoodObstacle, startPosition);
        this.randomCost = randomGoodObstacle.cost;
        this.randomBoost = randomGoodObstacle.boost;
    }

    updateStatistics(player){
        console.log("updating good stats")
        if(player.money >= this.randomCost){
            player.money -= this.randomCost;
            player.health += this.randomBoost;
        }
    }
}