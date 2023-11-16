window.onload = function () {
    const startBtn = document.getElementById('start');
    const startGameBtn = document.getElementById('start-game');
    const nextLevelBtn = document.getElementById('next-level');
    const restartBtn = document.getElementById('restart-btn');
    

    // beginning btn //

    const openingScreen = document.getElementById('opening-screen');
    const instruction = document.getElementById('instructions');
    // const gameContainer = document.getElementById('game-container');

    //1st two screen background sound
   
    // const backgroundSound = new Audio();
    // backgroundSound.src = "../music-game/1-2ElevatorMusic.mp3";
    // backgroundSound.preload = "auto";
    // backgroundSound.controls = false;
    // document.body.appendChild(backgroundSound);
    const backgroundSound = new AudioPlayer("../music-game/1-2ElevatorMusic.mp3");
    backgroundSound.setVolume(0.2);
    backgroundSound.loop();

    const firstLevelSound = new AudioPlayer("../music-game/1LevelJohn-Bartmann-Allez-Allez.mp3");
    firstLevelSound.setVolume(0.2);
    firstLevelSound.loop();

    const secondLevelSound = new AudioPlayer("../music-game/5Cooking-Long-Version-2level.mp3");
    secondLevelSound.setVolume(0.2);
    secondLevelSound.loop();
    

    let game;

    // start btn - to instruction btn
    startBtn.addEventListener('click', function() {
        openingScreen.style.display = "none";
        instruction.style.display = "flex";
        backgroundSound.play();
    } )

    // instruction btn - to the game container
    startGameBtn.addEventListener('click', function(){
        //initial health = 100%, resource = 25$.
        
        game = new Game(100, 25, 1, firstLevelSound);
        game.start();
        backgroundSound.pause();
    })

    //restart btn-refresh page 
    restartBtn.addEventListener('click', function(){
        restartGame()
    })

    //Next level btn 
    nextLevelBtn.addEventListener('click', function(){
        const healthPreviousLevel = game.player.health;
        const moneyPreviousLevel = game.player.money;
        game.middleScreenAndWinSound.pause();
        game = new Game(healthPreviousLevel, moneyPreviousLevel, 2, secondLevelSound);
        game.start();
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



