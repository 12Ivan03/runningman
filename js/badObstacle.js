class BadObstacle extends Obstacle {  

   

    constructor(gameScreen, startPosition){
       const badObstacleImg = [
        {
            image: "../images/burger.png",
            cost: 2,
            liability: 20 
        }, 
        {
            image: "../images/donut.png",
            cost: 1,
            liability: 10
        },
        {
            image: "../images/fries.png",
            cost: 5,
            liability: 5
        }
        ]
        const randomIndex = Math.floor(Math.random() * badObstacleImg.length);
        super(gameScreen,badObstacleImg[randomIndex], startPosition);
    }
    
    updateStatistics(game){
        
    }
   
}