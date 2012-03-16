var ctx
var gameloopId
var gameRunning = false

var mainLoopDelay = 10
var moto = new Image()

function init(){
    alert("init")
    //add event handler for clicking on start/stop button and toggle the game play
    $("#ss").click(function () {
        toggleGameplay();
    });
    ctx = document.getElementById('canvas').getContext('2d'); 

}

//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path) {
    ctx.beginPath();  
    for (i in path) {
        ctx.lineTo(i[0], i[1])
    }
    ctx.stroke();
}

function mainLoop() {
    
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