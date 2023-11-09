window.onload = function () {
    const startBtn = document.getElementById('start');
    const startGameBtn = document.getElementById('start-game');
    const nextLevelBtn = document.getElementById('next-level');
    const restartBtn = document.getElementById('restart-btn');
    

    const openingScreen = document.getElementById('opening-screen');
    const instruction = document.getElementById('instructions');

    startBtn.addEventListener('click', function() {
        console.log('click')
        openingScreen.style.display = "none";
        instruction.style.display = "flex";
    } )

    startGameBtn.addEventListener('click', function(){
        console.log('click2')
        startGameBtn.style.display = "none";
        
    })

};



