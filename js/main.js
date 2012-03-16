var ctx
var gameloopId
var gameRunning = false

var mainLoopDelay = 10
var moto = new Image()

function init(){
    initSettings();
    loadImages();
 
    //add event handler to surrounding DIV to monitor mouse move and update mushroom's x position
    $("#container").mousemove(function(e){
        mushroomX = e.pageX;
    });
 
    //add event handler for clicking on start/stop button and toggle the game play
    $("#ss").click(function (){
 
        toggleGameplay();
    });
}

function init() {
    //grab the canvas
    ctx = document.getElementById('canvas').getContext('2d'); 

}

//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(path) {
    ctx.beginPath();  
    for (i in path):
        ctx.lineTo(i[0], i[1])
    ctx.stroke();
}

function mainLoop() {
    
}

//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
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
