class GoodObstacle extends Obstacle {

    
    constructor(gameScreen, startPosition){
        const goodObstacleImg = [
            {
                name: "avocado",
                image: "./images/avocado.png",
                cost: 10,
                boost: 20
            }, 
            {
                name: "orange",
                image: "./images/orange.png",
                cost: 5,
                boost: 10
            },
            {
                name:"apple",
                image: "./images/apple.png",
                cost: 7,
                boost: 15
            }
        ]
        const randomGoodObstacle = goodObstacleImg[ Math.floor(Math.random() * goodObstacleImg.length)];
        super(gameScreen,randomGoodObstacle, startPosition);
        this.randomCost = randomGoodObstacle.cost;
        this.randomBoost = randomGoodObstacle.boost;
        this.randomObstacleName = randomGoodObstacle.name;

        this.sound = new Audio("../music-game/good-crash.mp3");
    }

    updateStatistics(player){
        if(player.money >= this.randomCost){
            this.sound.play();

            player.money -= this.randomCost;
            player.health += this.randomBoost;
            const cost = this.randomCost;
            // const name = this.randomObstacleName;
            const boost = this.randomBoost;
            document.getElementById('colision-hapens').innerText = `- $${cost}  + ${boost}%`;
            
            setTimeout(function(){
                document.getElementById('colision-hapens').innerText = "";
            }, 1000);

        } else {
            this.noSound.play();
        }
    }
}