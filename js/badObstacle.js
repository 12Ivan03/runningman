class BadObstacle extends Obstacle {  

   

    constructor(gameScreen, startPosition){
       const badObstacleImg = [
        {
            image: "./images/burger.png",
            cost: 2,
            liability: 20 
        }, 
        {
            image: "./images/donut.png",
            cost: 1,
            liability: 10
        },
        {
            image: "./images/fries.png",
            cost: 5,
            liability: 5
        }
        ]

        const randomBadObstacle = badObstacleImg[ Math.floor(Math.random() * badObstacleImg.length)];
        super(gameScreen,randomBadObstacle, startPosition);
        this.randomCost = randomBadObstacle.cost;
        this.randomLiability = randomBadObstacle.liability;
    }
    
    updateStatistics(player){
        if(player.money >= this.randomCost){
            player.health -= this.randomLiability;
            player.money -= this.randomCost;
        }
    }
    
}