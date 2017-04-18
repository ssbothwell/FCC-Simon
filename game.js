function State(playerMove) {
  // Move pattern for current game
  this.pattern = [];
  // Tracks player's moves in current round
  this.currentMoveIndex = 0;
  // Current Round Tracker 
  this.roundCounter = 0;
  // Strict mode flag
  this.strict = false;
  // Game state on|off|started = 0|1|2
  this.power = 0;

  //// Fabricjs Object
  // Green Button
  var greenButton = canvas.getItemByName('green');
  // Red Button
  var redButton = canvas.getItemByName('red');
  // Blue Button
  var blueButton = canvas.getItemByName('blue');
  // Yellow Button
  var yellowButton = canvas.getItemByName('yellow');
  // Counter Display
  var counter = canvas.getItemByName('countText');

  // Audio Playback
  function audioPlayer(sampleID) {
    greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    switch (sampleID) {
      case 0:
        greenAudio.play();
        break;
      case 1:
        redAudio.play();
        break;
      case 2:
        blueAudio.play();
        break;
      case 3:
        yellowAudio.play();
        break
      }
  }

  // FabricJS Button Highlight Functions
  function hlGreen() {
    setTimeout(function() {
      greenButton.setFill('#13ff7c');
      canvas.renderAll();
      audioPlayer(0); 
    }, 500);
    setTimeout(function() {
      greenButton.setFill('#03a64b');
      canvas.renderAll();
    }, 1000); 
  }
  function hlRed() {
    setTimeout(function() {
      redButton.setFill('#ff4c4c');
      canvas.renderAll();
      audioPlayer(1); 
    }, 500);
    setTimeout(function() {
      redButton.setFill('#9c121c');
      canvas.renderAll();
    }, 1000); 
  }
  function hlBlue() {
    setTimeout(function() {
      blueButton.setFill('#3399ff');
      canvas.renderAll();
      audioPlayer(2); 
    }, 500);
    setTimeout(function() {
      blueButton.setFill('#1d8cff');
      canvas.renderAll();
    }, 1000); 
  }
  function hlYellow() {
    setTimeout(function() {
      yellowButton.setFill('#fed93f');
      canvas.renderAll();
      audioPlayer(3); 
    }, 500);
    setTimeout(function() {
      yellowButton.setFill('#cba70a');
      canvas.renderAll();
    }, 1000); 
  }
  var hlArr = [hlGreen, hlRed, hlBlue, hlYellow];

  
  // fabricJS counter update
  function updateGuiCounter(val) {
    counter.bringToFront();
    counter.setText(val);
    canvas.renderAll();
  }

  // Iterate move index
  this.incrementMove = function() {
    this.currentMoveIndex++
  }
  
  this.resetMove = function() {
    this.currentMoveIndex = 0;
  }


  // Increment Round Counter
  this.incrementRoundCounter = function () {
    this.roundCounter++;
    var round = 1 + this.roundCounter;
    setTimeout(function() {
      updateGuiCounter(round.toString());
    }, 500);
  }

  // Reset Round Counter
  this.resetRoundCounter = function() {
    this.roundCounter = 0;
    var round = 1 + this.roundCounter;
    setTimeout(function() {
      updateGuiCounter(round.toString());
    }, 250);
  }

  // Helper function for generating pattern array
  this.randomButton = function() {
    return Math.floor(Math.random() * 4);
  }
  
  // Generate Pattern array
  this.generatePattern = function() {
    this.pattern = Array(5).fill(0).map(this.randomButton); 
  }

  // Play Pattern Helper
  this.playPattern = function() {
    for (var i = 0; i <= this.roundCounter; i++){
      this.doSetTimeout(this.pattern, i);
    }    
  }

  // timeOut intermediate helper
  this.doSetTimeout = function(arr, i) {
    setTimeout(function() {
      console.log(arr[i]);
      hlArr[arr[i]]();
    }, 1500 * i);
  }

  // Helper function to return current move
  this.currentMove = function() {
    return this.pattern[this.currentMoveIndex];
  }

  // Power On Function
  this.powerToggle = function() {
    this.power == 0 ? this.power = 1 : this.power = 0;
    this.power == 0 ? updateGuiCounter('') : updateGuiCounter('--');
  }
  
  // Start The Next Round
  this.startRound = function() {
    this.resetMove();
    that = this;
    setTimeout(function() {
      that.playPattern();
    }, 500);
  }

  // Start a new game
  this.newGame = function() {
    canvas.renderAll();
    if (this.power != 0) {
      this.generatePattern();
      this.resetRoundCounter();
      console.log('new game');
      this.power = 2;
      this.startRound();
    }
  }

  this.resetGame = function() {
    this.resetRoundCounter();
    this.currentMoveIndex = 0;
    updateGuiCounter('--');
  }
  
  // Check player move
  this.playerClick = function(buttonID) {
    if (this.power == 2) {
      clicked = this.checkMove(buttonID);
      audioPlayer(buttonID); 
      if (clicked == true) {
        if (this.currentMoveIndex == 4) {
          console.log('You Win!');
          this.resetGame();
          this.power = 1;
          updateGuiCounter('!!');
        } else if (this.currentMoveIndex == this.roundCounter) {
          this.incrementRoundCounter();
          this.startRound();
        } else {
          this.incrementMove();
        }
      } else {
        if (this.strict == true) {
          this.power = 1;
          this.resetGame();
        } else {
          this.startRound(); 
        }
      }
    }
  }

  this.checkMove = function(playerMove) {
    return playerMove == this.currentMove() ? true : false;
  };
  
}

