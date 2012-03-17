var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;
var spriteSize = {w:16, h:33}

var mainLoopDelay = 10;

var ownPath;
var ownOrientation;
var motoOwnSprites;
var ownActualPoint
var ownSpeed

var otherPath;
var otherOrientation;
var motoOtherSprites;
var otherActualPoint

function init() {
    //just a debug array of points
    ownOrientation = 2;
    ownActualPoint = {x:0, y:0}
    ownPath = [{x:0, y:0}];
    ownSpeed = 0.1
    otherPath = [{x:0, y:0}]
    
    //add event handler for clicking on start/stop button and toggle the game play
    var td = document.getElementById('ss');
    td.setAttribute('onclick', 'toggleGameplay()');
    document.onkeydown = handleInteractions
    //td.setAttribute('onKeyPress', 'return handleInteractions(event)')
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    var canvas = document.getElementById("canvas");
    screenX = canvas.height;
    screenY  = canvas.offsetWidth;

    screenX 
    screenY 
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
        ctx.lineTo(ownPath[index].x, ownPath[index].y)
    }
    //add the actual point for the player
    ctx.lineTo(ownActualPoint.x, ownActualPoint.y)
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
        switch (rot) {
            case 0: ctx.drawImage(motoOwnSprite[rot], x - 7, y - 33); break; //OK
            case 1: ctx.drawImage(motoOwnSprite[rot], x, y - 7); break; //OK
            case 2: ctx.drawImage(motoOwnSprite[rot], x - 7, y); break; //OK
            case 3: ctx.drawImage(motoOwnSprite[rot], x - 33, y - 7); break; //OK
        }
    } else {
        ctx.drawImage(motoOtherSprite[rot], x, y)
    }
}

function updateOrientation(newOrientation) {
    if (((ownOrientation + newOrientation) % 2) != 0) {
        ownOrientation = newOrientation
        ownPath.push({x: ownActualPoint.x, y: ownActualPoint.y});
    }
}

function moveMoto() {
    switch (ownOrientation) {
        case 0:ownActualPoint.y = ownActualPoint.y - ownSpeed; break;
        case 1:ownActualPoint.x = ownActualPoint.x + ownSpeed; break;
        case 2:ownActualPoint.y = ownActualPoint.y + ownSpeed; break;
        case 3:ownActualPoint.x = ownActualPoint.x - ownSpeed; break;
    }
}

function dectectCollision() {
    switch (ownOrientation) {
        case 0: return (ownActualPoint.y - 33) < 0;
        case 1: return ownActualPoint.x > screenX;
        case 2: return 
    }
}   


function mainLoop() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);
    //redraw the thingy
    drawPath(ownPath, 0)
    drawPath(otherPath, 1)
    drawMoto(ownActualPoint.x, ownActualPoint.y, ownOrientation, 0)
    ctx.save()

    moveMoto()
    
}

//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
    gameRunning = !gameRunning;
    if(gameRunning) {
        init()
        clearInterval(gameloopId);
        gameloopId = setInterval(mainLoop, mainLoopDelay);
    } else {
        clearInterval(gameloopId);
        //clear canvas
        ctx.clearRect(0, 0, 500, 500);
        ctx.save()
    }
}
