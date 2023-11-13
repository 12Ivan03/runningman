window.onload = function () {
    const startBtn = document.getElementById('start');
    const startGameBtn = document.getElementById('start-game');
    // const nextLevelBtn = document.getElementById('next-level');
    const restartBtn = document.getElementById('restart-btn');
    

    // beginning btn //

    const openingScreen = document.getElementById('opening-screen');
    const instruction = document.getElementById('instructions');
    const gameContainer = document.getElementById('game-container');

    let game;

    // start btn - to instruction btn
    startBtn.addEventListener('click', function() {
        openingScreen.style.display = "none";
        instruction.style.display = "flex";
    } )

    // instruction btn - to the game container
    startGameBtn.addEventListener('click', function(){
        game = new Game();
        game.start();
    })

    //restart btn-refresh page 
    restartBtn.addEventListener('click', function(){
        restartGame()
    })

    function restartGame() {
        location.reload();
    }

    // Function to handle the jump
    function jump(player) {
        player.element.style.transform = 'translateY(-225px)';
        setTimeout(() => {
            player.element.style.transform = 'translateY(-225px)';
            player.element.style.transform = 'translateY(0)';
        }, 300);
    }

      
    function handleKeydown(event) {
        const code = event.code;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "c",
          "Space" //space
        ];
    
        // Check if the pressed key is in the possibleKeystrokes array
        if (possibleKeystrokes.includes(code)) {
          event.preventDefault();
          // Update player's directionX and directionY based on the key pressed
          switch (code) {
            case "ArrowLeft":
              game.player.directionX = -1;
              break;
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            case "ArrowRight":
              game.player.directionX = 1;
              break;
            case "ArrowDown":
              game.player.directionY = 1;
              break;
            case "Space":
              jump(game.player);
               break;
          }
        }
      }

    // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown);

};



