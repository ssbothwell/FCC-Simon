window.onload = function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');


    ctx.beginPath();
    ctx.arc(300, 300, 300, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = '#343134';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 300, 140, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = '#eee9ed';
    ctx.fill();
    
    // Upper Left Clipping Region
    ctx.save();
    ctx.beginPath();
    ctx.rect(0,0,290,290);
    ctx.clip();
    // Draw Green Quarter
    ctx.beginPath();
    ctx.arc(300,300, 270, dToR(270), dToR(180), true);
    ctx.arc(300,300, 155, dToR(180), dToR(270));
    ctx.fillStyle = '#03a64b';
    ctx.fill();
    // Restore Rest of Canvas 
    ctx.restore();

    // Upper Left Clipping Region
    ctx.save();
    ctx.beginPath();
    ctx.rect(0,310,290,600);
    ctx.clip();
    // Yellow Quarter
    ctx.beginPath();
    ctx.arc(300,300, 270, dToR(180), dToR(90), true);
    ctx.arc(300,300, 155, dToR(90) , dToR(180));
    ctx.fillStyle = '#cba70a';
    ctx.fill();
    // Restore Rest of Canvas 
    ctx.restore();

    // Upper Left Clipping Region
    ctx.save();
    ctx.beginPath();
    ctx.rect(310,310,600,600);
    ctx.clip();
    // Blue Quarter
    ctx.beginPath();
    ctx.arc(300,300, 270, dToR(90), dToR(0), true);
    ctx.arc(300,300, 155, dToR(0) , dToR(90));
    ctx.fillStyle = '#1d8cff';
    ctx.fill();
    // Restore Rest of Canvas 
    ctx.restore();

    // Upper Left Clipping Region
    ctx.save();
    ctx.beginPath();
    ctx.rect(310,0,600,290);
    ctx.clip();
    // Red Quarter
    ctx.beginPath();
    ctx.arc(300,300, 270, dToR(0), dToR(270), true);
    ctx.arc(300,300, 155, dToR(270), dToR(0));
    ctx.fillStyle = '#9c121c';
    ctx.fill();
    // Restore Rest of Canvas 
    ctx.restore();
  }

  function dToR(degrees) {
  // Converts degrees to radians
      return (degrees * Math.PI) / 180;
  }
}
