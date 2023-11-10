window.onload = function () {
    const startBtn = document.getElementById('start');
    const startGameBtn = document.getElementById('start-game');
<<<<<<< HEAD
    // const nextLevelBtn = document.getElementById('next-level');
=======
    const nextLevelBtn = document.getElementById('next-level');
>>>>>>> master
    const restartBtn = document.getElementById('restart-btn');
    

    // beginning btn //

    const openingScreen = document.getElementById('opening-screen');
    const instruction = document.getElementById('instructions');
    const gameContainer = document.getElementById('game-container');

<<<<<<< HEAD
    let game;

    // start btn - to instruction btn
    startBtn.addEventListener('click', function() {
        console.log('click');
=======
    // start btn - to instruction btn
    startBtn.addEventListener('click', function() {
        console.log('click')
>>>>>>> master
        openingScreen.style.display = "none";
        instruction.style.display = "flex";
    } )

    // instruction btn - to the game container
    startGameBtn.addEventListener('click', function(){
<<<<<<< HEAD
        game = new Game();
        game.start();
=======
        console.log('click2')
        instruction.style.display  = "none";
        gameContainer.style.display = "block";
>>>>>>> master
    })

    //restart btn-refresh page 
    restartBtn.addEventListener('click', function(){
        restartGame()
    })

    function restartGame() {
        location.reload();
    }

<<<<<<< HEAD
    // Function to handle the jump
    function jump(player) {
        console.log("entered jump", player);
        player.element.style.transform = 'translateY(-225px)';
        setTimeout(() => {
            player.element.style.transform = 'translateY(-225px)';
            player.element.style.transform = 'translateY(0)';
        }, 300);
    }

      
    function handleKeydown(event) {
        const code = event.code;
        console.log("event", event);
        console.log("code", code)
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
          console.log("entered line 64 code", code);
          // Update player's directionX and directionY based on the key pressed
          switch (code) {
            case "ArrowLeft":
              console.log("code", code);
              game.player.directionX = -1;
              break;
            case "ArrowUp":
              console.log("code", code);
              game.player.directionY = -1;
              break;
            case "ArrowRight":
              console.log("code", code);
              game.player.directionX = 1;
              break;
            case "ArrowDown":
              console.log("code", code);
              game.player.directionY = 1;
              break;
            case "Space":
                console.log("code", code);
              jump(game.player);
               break;
          }
        }
      }

    // Add the handleKeydown function as an event listener for the keydown event
    window.addEventListener("keydown", handleKeydown);
=======
>>>>>>> master

};



