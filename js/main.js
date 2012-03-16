var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;

var mainLoopDelay = 10;
var ownPath;
var ownPathLength;
var motoOwnSpriteVert = new Image();
var motoOwnSpriteHor = new Image();
var otherPath
var otherPathLength
var motoOtherSpriteVer = new Image();
var motoOtherSpriteHor = new Image();

function init() {
    //just a debug array of points
    ownPath = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
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
    motoOtherSpriteVer.src = "image/tron_yellow_horizontal.png"
}

//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path) {
    ctx.beginPath();
    for (var index = 0; index < ownPath.length; index++) {
        ctx.lineTo(path[index].x, path[index].y)
    }
    ctx.stroke();
}

function mainLoop() {
    ctx.drawImage(motoOwnSpriteVert, 30, 30);
    drawPath(ownPath)
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
