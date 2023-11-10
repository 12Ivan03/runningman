/**
 * The Game class will contain
 * - game loop -> will refresh the game with current status of the player.
 * - will contain the logic to win lose or go to next level situation.
 * 
 * 
 */
class Game {

    constructor(){
        this.instructionScreen = document.getElementById('instructions');
        
        // Game Scren
        this.gameContainer = document.getElementById('game-container');
        this.width = '100vw';
        this.height = '100vh';
        //Player 
        this.player = null // we initialize it later

        //obstacle container
        this.obstacles = [];

        //Game properties
        this.health = 100;
        this.distance = 20; // Level1-20kms
        this.speed = 1/3; 
        this.money = 25;

        this.isGameOver = false;
        
    }

    start(){
        this.gameContainer.style.width = `${this.width}px`;
        this.gameContainer.style.height = `${this.height}px`;
        this.instructionScreen.style.display = 'none';
        this.gameContainer.style.display = 'flex';

        //Invoke game Loop
        window.requestAnimationFrame(()=>  this.gameLoop());
    }

    gameLoop(){

        
    }
}