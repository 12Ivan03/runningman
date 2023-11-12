class BadObstacle extends Obstacle {  

   

    constructor(gameScreen, startPosition){
        const  badObstacleImg = ["../images/burger.png",
        "../images/donut.png",
        "../images/fries.png"
       ]
        const randomIndex = Math.floor(Math.random() * badObstacleImg.length);
        super(gameScreen,badObstacleImg[randomIndex], startPosition);
    }
    
    // updatePosition(){

    // }

    // move(){
        
    // }
}