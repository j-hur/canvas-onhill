// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 500, 400);

// Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(500, 0, 50, 0, 2 * Math.PI);
ctx.fill();

// Hill
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 400, 250, 0, 2 * Math.PI);
ctx.fill();

// Trees
ctx.fillStyle = "brown";
ctx.fillRect(50, 160, 30, 150);
ctx.fillRect(400, 150, 40, 200);

ctx.fillStyle = "chartreuse";
ctx.beginPath();
ctx.arc(65, 150, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(420, 130, 50, 0, 2 * Math.PI);
ctx.fill();

// Person's Head
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(250, 100, 20, 0, 2 * Math.PI);
ctx.stroke();

// Person's Body
ctx.beginPath();
ctx.moveTo(250, 120);
ctx.lineTo(250, 180);
ctx.stroke();

// Left leg
ctx.beginPath();
ctx.moveTo(250, 180);
ctx.lineTo(240, 220);
ctx.stroke();

// Right Leg
ctx.beginPath();
ctx.moveTo(250, 180);
ctx.lineTo(260, 220);
ctx.stroke();

// Left arm
ctx.beginPath();
ctx.moveTo(250, 140);
ctx.lineTo(210, 120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 120);
ctx.lineTo(205, 105);
ctx.stroke();

// Right Arm
ctx.beginPath();
ctx.moveTo(250, 140);
ctx.lineTo(290, 120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(290, 120);
ctx.lineTo(295, 105);
ctx.stroke();

// Text
ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Person Standing on Hill", 150, 390);
