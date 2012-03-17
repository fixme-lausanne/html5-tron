var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;

var mainLoopDelay = 10;

var ownPath;
var motoOwnSprites;

var otherPath
var motoOtherSprites;

function init() {
    //just a debug array of points
    ownPath = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
    otherPath = [{x:60, y:88}, {x:46, y:200}, {x:200, y:200}]
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
        motoOwnSprite[i] = new Image()
        motoOwnSprite[i].src = "image/tron_blue_{0}.png".replace("{0}", i)
        motoOwnSprite[i] = new Image()
        motoOwnSprite[i].src = "image/tron_yellow_{0}.png".replace("{0}", i)
    }
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
    ctx.lineCap = "round";
    if (player == 0) {
        ctx.strokeStyle = "blue";
    } else {
        ctx.strokeStyle = "yellow"
    }
    ctx.stroke();
    //reset the draw 
    ctx.lineWidth = 1;
}

function drawMoto(x, y, rot, player) {
    if (player == 0) {
        ctx.drawImage(motoOwnSprite[rot], x, y)
    } else {
        ctx.drawImage(motoOtherSprite[rot], x, y)
    }
}

function mainLoop() {
    drawPath(ownPath, 0)
    drawPath(otherPath, 1)
    drawMoto(200, 200, 3, 0)
    ctx.save()
}

//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
    alert("button Clicked")
    gameRunning = !gameRunning;
    
    if(gameRunning) {
        clearInterval(gameloopId);
        gameloopId = setInterval(mainLoop, mainLoopDelay);
    } else {
        clearInterval(gameloopId);
    }
}
