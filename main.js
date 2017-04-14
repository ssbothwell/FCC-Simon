function start() {
  // Add a getItembyName function to the Canvas prototype
  fabric.Canvas.prototype.getItemByName = function(name) {
    var object = null,
        objects = this.getObjects();
  
    for (var i = 0, len = this.size(); i < len; i++) {
      if (objects[i].name && objects[i].name === name) {
        object = objects[i];
        break;
      }
    }
    return object;
  };
  gui();
  game = new State();
  game.generateMoves();
}
window.onload = start; 
