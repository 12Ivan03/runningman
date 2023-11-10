window.onload = function () {
    const startBtn = document.getElementById('start');
    const startGameBtn = document.getElementById('start-game');
    const nextLevelBtn = document.getElementById('next-level');
    const restartBtn = document.getElementById('restart-btn');
    

    // beginning btn //

    const openingScreen = document.getElementById('opening-screen');
    const instruction = document.getElementById('instructions');
    const gameContainer = document.getElementById('game-container');

    // start btn - to instruction btn
    startBtn.addEventListener('click', function() {
        console.log('click')
        openingScreen.style.display = "none";
        instruction.style.display = "flex";
    } )

    // instruction btn - to the game container
    startGameBtn.addEventListener('click', function(){
        console.log('click2')
        instruction.style.display  = "none";
        gameContainer.style.display = "block";
    })

    //restart btn-refresh page 
    restartBtn.addEventListener('click', function(){
        restartGame()
    })

    function restartGame() {
        location.reload();
    }


};



