function State(playerMove) {
  // List of moves in current game
  this.moves = [];
  // Current move index
  this.currentMoveIndex = 0;
  // Current Number of Moves 
  this.moveCount = 0;
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
  
  // Start The Next Round
  this.startRound = function() {
    this.resetMove();
    if (this.power == 2) {
      for (var i = 0; i <= this.moveCount; i++){
        console.log(this.moves[i]); 
      }
    }    
  }

  // Start a new game
  this.newGame = function() {
    if (this.power == 1) {
      console.log('new game');
      this.power = 2;
      this.startRound();
    }
  }

  // Check player move
  this.playerClick = function(buttonID) {
    if (this.power == 2) {
      clicked = this.checkMove(buttonID);
      console.log(clicked);
      if (clicked == true) {
        if (this.currentMoveIndex == 4) {
          console.log('You Win!');
          this.power = 1;
        } else if (this.currentMoveIndex == this.moveCount) {
          console.log('Round Complete!');
          this.moveCount++;
          this.startRound();
        } else {
          this.nextMove();
        }
      } else {
        console.log('you lose!');
        this.power = 1;
        this.resetMove();
      }
    }
  }

  this.checkMove = function(playerMove) {
    return playerMove == this.currentMove() ? true : false;
  };
  
}
