var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;

var mainLoopDelay = 10;
var ownPath;
var ownPathLength;
var otherPath
var otherPathLength
var motoOwnSprite0 = new Image();
var motoOwnSprite1 = new Image();
var motoOwnSprite2 = new Image();
var motoOwnSprite3 = new Image();
var motoOtherSprite0 = new Image();
var motoOtherSprite1 = new Image();
var motoOtherSprite2 = new Image();
var motoOtherSprite3 = new Image();

function init() {
    //just a debug array of points
    ownPath = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
    otherPath = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}]
    //add event handler for clicking on start/stop button and toggle the game play
    var td = document.getElementById('ss');
    td.setAttribute('onclick', 'toggleGameplay()');
    ctx = document.getElementById('canvas').getContext('2d');
    loadImage()
}

function loadImage() {
    motoOwnSprite = new Array(4);
    motoOtherSprite = new Array(4);
    for ( var i = 0;i < 4;i++) {
    motoOwnSprite0.src = "image/tron_blue_0.png"
    motoOwnSprite1.src = "image/tron_blue_1.png"
    motoOwnSprite2.src = "image/tron_blue_2.png"
    motoOwnSprite3.src = "image/tron_blue_3.png"
    motoOtherSprite0.src = "image/tron_yellow_0.png"
    motoOtherSprite1.src = "image/tron_yellow_1.png"
    motoOtherSprite2.src = "image/tron_yellow_2.png"
    motoOtherSprite2.src = "image/tron_yellow_3.png
}

//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path, player) {
    ctx.beginPath();
    
    for (var index = 0; index < ownPath.length; index++) {
        ctx.lineTo(path[index].x, path[index].y)
    }
    //bigger line
    ctx.lineWidth = 4;
    //round ending for the line
    ctx.lineCap="round";
    ctx.fillStyle = "red";  
    ctx.stroke();
    //reset the draw 
    ctx.lineWidth = 1;
}
function drawMotoBlue0(x, y, rot) 
{
	switch (rot) {
	case 0: 
		ctx.drawImage(motoOwnSprite0, x, y);
		break;
	case 1: 
		ctx.drawImage(motoOwnSprite1, x, y);
		break;
	case 2:
		ctx.drawImage(motoOwnSprite2, x, y)
		
}



function mainLoop() {
    drawMotoBlue1(200, 200)
	ctx.save()
}	


//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
    alert("button Clicked")
    gameRunning = !gameRunning;
    
    if(gameRunning)
    {
        clearInterval(gameloopId);
        gameloopId = setInterval(mainLoop, mainLoopDelay);
    }
    else
    {
        clearInterval(gameloopId);
    }
}
