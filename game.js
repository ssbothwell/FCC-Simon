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
  
  //// FabricJS Button Highlight Functions
  function hlGreen() {
    setTimeout(function() {
      greenButton.setFill('#13ff7c');
      canvas.renderAll();
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
    }, 500);
    setTimeout(function() {
      yellowButton.setFill('#cba70a');
      canvas.renderAll();
    }, 1000); 
  }
  var hlArr = [hlGreen, hlRed, hlBlue, hlYellow];
  
  // Iterate move index
  this.nextMove = function() {
    this.currentMoveIndex++
  }
  
  this.resetMove = function() {
    this.currentMoveIndex = 0;
  }

  // fabricJS counter update
  function updateGuiCounter(val) {
    counter.bringToFront();
    counter.setText(val);
    canvas.renderAll();
  }

  // Update counter
  this.incrementRoundCounter = function () {
    this.roundCounter++;
    var round = 1 + this.roundCounter;
    setTimeout(function() {
      updateGuiCounter(round.toString());
    }, 500);
  }

  this.resetGame = function() {
    this.roundCounter = 0;
    this.currentMoveIndex = 0;
    updateGuiCounter('--');
  }
  
  // Helper function for generating pattern array
  this.randomButton = function() {
    return Math.floor(Math.random() * 4);
  }
  
  // Helper function to return current move
  this.currentMove = function() {
    return this.pattern[this.currentMoveIndex];
  }

  // Generate move array
  this.generatePattern = function() {
    this.pattern = Array(5).fill(0).map(this.randomButton); 
  }
  
  // Power On Function
  this.powerToggle = function() {
    this.power == 0 ? this.power = 1 : this.power = 0;
    this.power == 0 ? updateGuiCounter('') : updateGuiCounter('--');
  }
  
  // timeOut intermediate helper
  this.doSetTimeout = function(arr, i) {
    setTimeout(function() {
      console.log(arr[i]);
      hlArr[arr[i]]();
    }, 1500 * i);
  }

  // Start The Next Round
  this.startRound = function() {
    this.resetMove();
    for (var i = 0; i <= this.roundCounter; i++){
      this.doSetTimeout(this.pattern, i);
    }    
  }

  // Start a new game
  this.newGame = function() {
    canvas.renderAll();
    if (this.power != 0) {
      this.generatePattern();
      updateGuiCounter('1');
      console.log('new game');
      this.power = 2;
      this.startRound();
    }
  }

  // Check player move
  this.playerClick = function(buttonID) {
    if (this.power == 2) {
      clicked = this.checkMove(buttonID);
      if (clicked == true) {
        if (this.currentMoveIndex == 4) {
          console.log('You Win!');
          this.resetGame();
          this.power = 1;
        } else if (this.currentMoveIndex == this.roundCounter) {
          console.log('Round Complete!');
          this.incrementRoundCounter();
          this.startRound();
        } else {
          this.nextMove();
        }
      } else {
        if (this.strict == true) {
          this.power = 1;
          this.resetGame();
          console.log('you lose!');
        } else {
          this.startRound(); 
          console.log('try again');
        }
      }
    }
  }

  this.checkMove = function(playerMove) {
    return playerMove == this.currentMove() ? true : false;
  };
  
}

