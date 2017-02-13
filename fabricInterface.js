window.onload = function() {
  // create a wrapper around native canvas element (with id="c")
  var canvas = new fabric.Canvas('game');
  
  // Outer Circle Object
  var outerCircle = new fabric.Circle({
    radius: 300,
    top: 300,
    left: 300,
    fill: '#343134',
    originX: 'center',
    originY: 'center',
    selectable: false,
  });
  
  // Inner Circle Object
  var innerCircle = new fabric.Circle({
    radius: 140,
    top: 300,
    left: 300,
    originX: 'center',
    originY: 'center',
    fill: '#eee9ed',
    selectable: false,
  });
  
  // Green Button
  var greenButton = new fabric.Path("M 290 145 A 155 155 0 0 0 145 290 L 30 290 A 270 270 0 0 1 290 30", {
    fill: '#03a64b', 
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  greenButton.on('mousedown', function() {
    greenButton.setFill('#13ff7c');
    canvas.deactivateAll().renderAll();
  }); 

  greenButton.on('mouseup', function() {
    greenButton.setFill('#03a64b');
    canvas.deactivateAll().renderAll();
  });

  // Red Button
  var redButton = new fabric.Path("M 310 145 A 155 155 0 0 1 455 290 L 570 290 A 270 270 0 0 0 310 30", {
    fill: '#9c121c',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  redButton.on('mousedown', function() {
    redButton.setFill('#ff4c4c');
    canvas.deactivateAll().renderAll();
  }); 
  redButton.on('mouseup', function() {
    redButton.setFill('#9c121c');
    canvas.deactivateAll().renderAll();
  });

  // Blue Button
  var blueButton = new fabric.Path("M 455 310 A 155 155 0 0 1 310 455 L 310 570 A 270 270 0 0 0 570 310", {
    fill: '#1d8cff',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  blueButton.on('mousedown', function() {
    blueButton.setFill('#3399ff');
    canvas.deactivateAll().renderAll();
    console.log('foo');
  }); 
  blueButton.on('mouseup', function() {
    blueButton.setFill('#1d8cff');
    canvas.deactivateAll().renderAll();
  });

  // Yellow Button
  var yellowButton = new fabric.Path("M 290 455 A 155 155 0 0 1 145 310 L 30 310 A 270 270 0 0 0 290 570", {
    fill: '#cba70a',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  yellowButton.on('mousedown', function() {
    yellowButton.setFill('#fed93f');
    canvas.deactivateAll().renderAll();
  }); 
  yellowButton.on('mouseup', function() {
    yellowButton.setFill('#cba70a');
    canvas.deactivateAll().renderAll();
  });


  var titleText = new fabric.Text('Simoné', { 
    left: 300, 
    top: 230,
    fontSize: 60,
    fontFamily: 'Arial',
    textAlign: 'center',
    originX: 'center',
    originY: 'center',
    selectable: false,
  });

  // Power Switch
  var powerSwitch = new fabric.Rect({
    left: 275,
    top: 390,
    width: 50,
    height: 25,
    fill: '#211f22',
    rx: 3,
    ry: 3,
    selectable: false,
  });

  var powerSwitchToggle = new fabric.Rect({
    left: 277,
    top: 392,
    width: 21,
    height: 21,
    fill: '#1d8cff',
    rx: 3,
    ry: 3,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });
  
  var powerFlag = false;
  powerSwitchToggle.on('mousedown', function() {
    if ( powerFlag === true ) {
      powerSwitchToggle.animate('left', '-=25', { onChange: canvas.renderAll.bind(canvas) });
      powerFlag = false;
    } else {
      powerSwitchToggle.animate('left', '+=25', { onChange: canvas.renderAll.bind(canvas) });
      powerFlag = true;
    }
  }); 

  // Count Screen
  var countScreen = new fabric.Rect({
    left: 190,
    top: 285,
    width: 75,
    height: 50,
    rx: 10,
    ry: 10,
    fill: '#211f22',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  // Start Button Background
  var startBackground = new fabric.Circle({
    radius: 18,
    top: 310,
    left: 300,
    originX: 'center',
    originY: 'center',
    fill: '#333333',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
    shadow:{ color:"rgb(0,0,0)",blur:15,offsetY:2 }
  });


  // Strict Button Foreground
  var startForeground = new fabric.Circle({
    radius: 12,
    top: 310,
    left: 300,
    originX: 'center',
    originY: 'center',
    fill: '#fa0000',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  startForeground.on('mousedown', function() {
      startBackground.animate('top', '+=2', { onChange: canvas.renderAll.bind(canvas), duration: 100,});
      startForeground.animate('top', '+=2', { onChange: canvas.renderAll.bind(canvas), duration: 100, });
  }); 
  startForeground.on('mouseup', function() {
      startBackground.animate('top', '-=2', { onChange: canvas.renderAll.bind(canvas), duration: 100,});
      startForeground.animate('top', '-=2', { onChange: canvas.renderAll.bind(canvas), duration: 100,});
  });

  // Strict Button Background
  var strictBackground = new fabric.Circle({
    radius: 18,
    top: 310,
    left: 366,
    originX: 'center',
    originY: 'center',
    fill: '#333333',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  // Strict Button Foreground
  var strictForeground = new fabric.Circle({
    radius: 12,
    top: 310,
    left: 366,
    originX: 'center',
    originY: 'center',
    fill: '#ffff00',
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
  });

  // "add" shapes into canvas
  canvas.add(outerCircle);
  canvas.add(innerCircle);
  canvas.add(greenButton);
  canvas.add(redButton);
  canvas.add(blueButton);
  canvas.add(yellowButton);
  canvas.add(titleText);
  canvas.add(powerSwitch);
  canvas.add(powerSwitchToggle);
  canvas.add(countScreen);
  canvas.add(startBackground);
  canvas.add(startForeground);
  canvas.add(strictBackground);
  canvas.add(strictForeground);
}


