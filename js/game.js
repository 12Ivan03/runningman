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
        this.gameScreen = document.getElementById('game-container');
        this.width = '100vw';
        this.height = '100vh';
        

    }
}