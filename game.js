function State(playerMove) {
  // List of moves in current game
  this.moves = [];
  // Current move index
  this.currentMoveIndex = 0;
  // Current Round Number 
  this.roundNumber = 0;
  // Fabricjs Counter Object
  var counter = canvas.getItemByName('countText');
  // Strict mode flag
  this.strict = false;
  // Game state on|off|started = 0|1|2
  this.power = 0;

  // Iterate move index
  this.nextMove = function() {
    this.currentMoveIndex++
  }
  
  this.resetMove = function() {
    this.currentMoveIndex = 0;
  }
  // fabricJS counter update
  function updateGuiCounter(val) {
    counter.setText(val);
    canvas.renderAll();
  }

  // Update counter
  this.loadCounter = function () {
    var round = 1 + this.roundNumber;
    updateGuiCounter(round.toString());
  }

  // Update counter
  this.incrementCounter = function () {
    this.roundNumber++;
    var round = 1 + this.roundNumber;
    updateGuiCounter(round.toString());
  }
  
  // Helper function for generating moves array
  this.randomButton = function() {
    return Math.floor(Math.random() * 4);
  }
  
  // Helper function to return current move
  this.currentMove = function() {
    return this.moves[this.currentMoveIndex];
  }

  // Generate move array
  this.generateMoves = function() {
    this.moves = Array(5).fill(0).map(this.randomButton); 
  }
  
  // Power On Function
  this.powerToggle = function() {
    this.power == 0 ? this.power = 1 : this.power = 0;
    this.power == 0 ? updateGuiCounter('') : updateGuiCounter('--');
    console.log(this.power);
  }

  // Start The Next Round
  this.startRound = function() {
    this.resetMove();
    if (this.power == 2) {
      for (var i = 0; i <= this.roundNumber; i++){
        console.log(this.moves[i]); 
      }
    }    
  }

  // Start a new game
  this.newGame = function() {
    canvas.renderAll();
    if (this.power == 1) {
      console.log('new game');
      this.power = 2;
      this.loadCounter();
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
          updateGuiCounter('--');
          this.power = 1;
        } else if (this.currentMoveIndex == this.roundNumber) {
          console.log('Round Complete!');
          this.incrementCounter();
          this.startRound();
        } else {
          this.nextMove();
        }
      } else {
        console.log('you lose!');
        this.power = 1;
        updateGuiCounter('--');
        this.resetMove();
      }
    }
  }

  this.checkMove = function(playerMove) {
    return playerMove == this.currentMove() ? true : false;
  };
  
}

