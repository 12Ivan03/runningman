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

        this.sound = new AudioPlayer("../music-game/money-crash.wav");
    }
    
    updateStatistics(player){
       this.sound.play();
        
       player.money += this.randomCoins;

       const cost = this.randomCoins;
       document.getElementById('colision-hapens').innerText = `+ $${cost}`;
        setTimeout(function () {
            document.getElementById('colision-hapens').innerText = "";
        }, 1000);
    }
}