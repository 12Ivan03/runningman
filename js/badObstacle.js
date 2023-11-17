class BadObstacle extends Obstacle {  

    constructor(gameScreen, startPosition){
       const badObstacleImg = [
        {
            name: "burger",
            image: "./images/burger.png",
            cost: 3,
            liability: 15 
        }, 
        {
            name: "donut",
            image: "./images/donut.png",
            cost: 1,
            liability: 5
        },
        {
            name: "fries",
            image: "./images/fries.png",
            cost: 2,
            liability: 10
        }
        ]

        const randomBadObstacle = badObstacleImg[ Math.floor(Math.random() * badObstacleImg.length)];
        super(gameScreen,randomBadObstacle, startPosition);
        this.randomCost = randomBadObstacle.cost;
        this.randomLiability = randomBadObstacle.liability;
        this.randomObstacleName = randomBadObstacle.name;

        this.sound = new Audio("./music-game/bad-crash-maybe.wav");
    }
    
    updateStatistics(player){
        if(player.money >= this.randomCost){
            this.sound.play();

            player.health -= this.randomLiability;
            player.money -= this.randomCost;

            const cost = this.randomCost;
            // const name = this.randomObstacleName;
            const liability = this.randomLiability;
            const collisionElement =  document.getElementById('colision-hapens');
            collisionElement.innerText = `- $${cost}  - ${liability}%`;
            collisionElement.style.color = 'red';
            collisionElement.style.fontWeight = '700';
            setTimeout(function(){
                collisionElement.innerText = "";
            }, 1000);
            
        } else {
            this.noSound.play();
            const collisionElement = document.getElementById('colision-hapens');
            collisionElement.innerText = 'Low Cash :(';
            collisionElement.style.color = 'black';
            collisionElement.style.fontWeight = '700';
            setTimeout(function(){
                collisionElement.innerText = "";
            }, 1000);
        }
    }
   
}