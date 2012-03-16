var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;

var mainLoopDelay = 10;
var motoOwnSpriteVert = new Image();
var motoOwnSpriteHor = new Image();
var motoOtherSpriteVer = new Image();
var motoOtherSpriteHor = new Image();

function init() {
    //add event handler for clicking on start/stop button and toggle the game play
    var td = document.getElementById('ss');
    td.setAttribute('onclick', 'toggleGameplay()');
    ctx = document.getElementById('canvas').getContext('2d');
    loadImage()
}

function loadImage() {
    motoOwnSpriteVert.src = "image/tron_blue_vertical.png"
    motoOwnSpriteHor.src = "image/tron_blue_horizontal.png"
    motoOtherSpriteVer.src = "image/tron_yellow_vertical.png"
    motoOtherSpriteHor.src = "image/tron_yellow_horizontal.png"
}
//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path) {
    ctx.beginPath();  
    for (i in path) {
        ctx.lineTo(i[0], i[1])
    }
    ctx.stroke();
}
function drawMotoBlue1(x, y) 
{
	ctx.drawImage(motoOwnSpriteVert, x, y)

	
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
