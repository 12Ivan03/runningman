window.onload = function () {
  const startBtn = document.getElementById('start');
  const startGameBtn = document.getElementById('start-game');
  const nextLevelBtn = document.getElementById('next-level');
  const restartBtn = document.getElementById('restart-btn');
  

  // beginning btn //

  const openingScreen = document.getElementById('opening-screen');
  const instruction = document.getElementById('instructions');
  // const gameContainer = document.getElementById('game-container');

  const backgroundSound = new Audio("./music-game/1-2ElevatorMusic.mp3");
  backgroundSound.volume = 0.2;
  backgroundSound.loop = true;

  const firstLevelSound = new Audio("./music-game/1LevelJohn-Bartmann-Allez-Allez.mp3");
  firstLevelSound.volume = 0.2;
  firstLevelSound.loop = true;

  const secondLevelSound = new Audio("./music-game/5Cooking-Long-Version-2level.mp3");
  secondLevelSound.volume = 0.2;
  secondLevelSound.loop = true;

  const clickBtnSound = new Audio("./music-game/button-click-2.mp3");

  
  let game;

  // start btn - to instruction btn
  startBtn.addEventListener('click', function() {
      clickBtnSound.play();
      openingScreen.style.display = "none";
      instruction.style.display = "flex";
      backgroundSound.play();
  } )

  // instruction btn - to the game container
  startGameBtn.addEventListener('click', function(){
      clickBtnSound.play();  
      //initial health = 100%, resource = 25$.
      game = new Game(100, 25, 1, firstLevelSound);
      game.start();
      backgroundSound.pause();
  })

  //restart btn-refresh page 
  restartBtn.addEventListener('click', function(){
      clickBtnSound.play();
      restartGame()
  })

  //Next level btn 
  nextLevelBtn.addEventListener('click', function(){
      clickBtnSound.play();
      const healthPreviousLevel = game.player.health;
      const moneyPreviousLevel = game.player.money;
      game.middleScreenAndWinSound.pause();
      game = new Game(healthPreviousLevel, moneyPreviousLevel, 2, secondLevelSound);
      game.start();
  })

  function restartGame() {
      setTimeout(()=>location.reload(), 1000);
      // location.reload();
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



