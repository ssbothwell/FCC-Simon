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
    
    // Title Text
    ctx.font = "60px Arial";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('Simoné',300,250);

    // Power Switch
    ctx.beginPath();
    ctx.rect(275,390, 50,25);
    ctx.fillStyle = '#211f22';
    ctx.fill();
    ctx.beginPath();
    ctx.rect(302,392, 21,21);
    ctx.fillStyle = '#1d8cff';
    ctx.fill();

    // Power Switch Labels 
    ctx.font = "12px Arial";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'right';
    ctx.fillText('OFF',270,406);
    ctx.textAlign = 'left';
    ctx.fillText('ON',330,406);

    // Start Button
    ctx.beginPath();
    ctx.arc(300,310,18,0, Math.PI * 2, true);
    ctx.fillStyle = '#333333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(300,310,12,0,Math.PI * 2);
    ctx.fillStyle = '#fa0000';
    ctx.fill();

    // Start Label 
    ctx.font = "12px Arial";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('START',300,345);

    // Strict Button
    ctx.beginPath();
    ctx.arc(366,310,18,0, Math.PI * 2, true);
    ctx.fillStyle = '#333333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(366,310,12,0, Math.PI * 2, true);
    ctx.fillStyle = '#ffff00';
    ctx.fill();

    // Strict Label 
    ctx.font = "12px Arial";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('STRICT',366,345);

    // Power Button
    ctx.beginPath();
    ctx.arc(366,280,6,0, Math.PI * 2, true);
    ctx.fillStyle = '#333333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(366,280,3,0, Math.PI * 2, true);
    ctx.fillStyle = '#fa0000';
    ctx.fill();

    // Count Screen
    roundedRect(190,285,75,50,10,'fill', '#211f22');

    // Count Text
    ctx.font = "42px Arial";
    ctx.fillStyle = '#fa0000';
    ctx.textAlign = 'center';
    ctx.fillText('02',227,325);

    // Count Label 
    ctx.font = "12px Arial";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('COUNT',227.5,355);
    
  }
  
  function roundedRect(x,y,width,height,radii,fillMethod, color) {
    // Draw a rounded rectangle
    ctx.beginPath();
    ctx.arc(x+radii,y+radii,radii,dToR(180),dToR(270));
    ctx.lineTo(x+radii+width-(2*radii),y);
    ctx.arc(x+width-radii,y+radii,radii,dToR(270),dToR(0));
    ctx.lineTo(x+width,y+height-radii);
    ctx.arc(x+width-radii,y+height-radii,radii,dToR(0),dToR(90));
    ctx.lineTo(x+radii,y+height);
    ctx.arc(x+radii,y+height-radii,radii, dToR(90),dToR(180));
    ctx.lineTo(x,y+radii);

    if (fillMethod === 'fill') {
      ctx.fillStyle = color;
      ctx.fill();
    } else if (fillMethod === 'stroke') {
      ctx.strokeStyle = color;
      ctx.stroke();
    }  
  }  

  function dToR(degrees) {
  // Converts degrees to radians
      return (degrees * Math.PI) / 180;
  }
}
