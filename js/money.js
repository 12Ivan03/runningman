class Money extends Obstacle {
    constructor(gameScreen, startPosition){
       const moneyObstacleImg = [
        {
            image: "./images/coin.png",
            cost: 1
        }, 
        {
            image: "./images/coin3.png",
            cost: 10
        },
        {
            image: "./images/coin15.png",
            cost: 20
        }
        ]

        const randomMoney = moneyObstacleImg[Math.floor(Math.random() * moneyObstacleImg.length)];
        super(gameScreen,  randomMoney , startPosition);
        this.randomCoins = randomMoney.cost;

        this.sound = new Audio("./music-game/money-crash.wav");
    }
    
    updateStatistics(player){
       this.sound.play();
        
       player.money += this.randomCoins;

       const cost = this.randomCoins;
       const collisionElement = document.getElementById('colision-hapens');
       collisionElement.innerText = `+ $${cost}`;
       collisionElement.style.color = '#006600';
       collisionElement.style.fontWeight = '700';
        setTimeout(function () {
            collisionElement.innerText = "";
        }, 1000);
    }
}