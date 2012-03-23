var ctx;
var gameloopId;
var gameRunning = false;
var screenX;
var screenY;

var mainLoopDelay = 10;

var Moto = function(){
    this.id;
    this.path;
    this.orientation;
    this.sprites;
    this.actualPoint;
    this.speed;
    this.lineWidth;
    this.lineColor;
};
Moto.prototype.loadImage = function(path){
    this.sprites = new Array(4);
    for ( var i = 0;i < 4;i++) {
        this.sprites[i] = new Image();
        this.sprites[i].src = path.replace("{0}", i);
    }
};
Moto.prototype.moveHorizontal = function(path){
    return !(this.orientation % 2);
s};
var ownMoto;
var otherMoto;

function init() {
    //just a debug array of points
    ownMoto = new Moto();
    ownMoto.actualPoint = {x:0, y:0};
    ownMoto.orientation = 2;
    ownMoto.path = [{x:0, y:0}];
    ownMoto.speed = 0.1;
    ownMoto.loadImage("image/tron_blue_{0}.png");
    ownMoto.id = 0;
    ownMoto.lineWidth = 4;
    ownMoto.lineColor = "blue";
    
    //add event handler for clicking on start/stop button and toggle the game play
    var td = document.getElementById('ss');
    td.setAttribute('onclick', 'toggleGameplay()');
    document.onkeydown = handleInteractions;
    
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    screenX = canvas.height;
    screenY  = canvas.width;
}

//https://developer.mozilla.org/en/Drawing_Graphics_with_Canvas#Using_Paths
function drawPath(player) {
    ctx.beginPath();
    
    for (var index = 0; index < player.path.length; index++) {
        ctx.lineTo(player.path[index].x, player.path[index].y);
    }
    //add the actual point for the player
    ctx.lineTo(player.actualPoint.x, player.actualPoint.y);
    //bigger line
    ctx.lineWidth = player.lineWidth;
    //blur line try

    //round ending for the line
    ctx.lineCap = "round";
    ctx.strokeStyle = player.lineColor;
    ctx.stroke();
    ctx.restore();
    
}

function drawMoto(player) {
    var x = player.actualPoint.x
    var y = player.actualPoint.y
    var radius = 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#8ED6FF";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    switch (player.orientation) {
        case 0: ctx.drawImage(player.sprites[0], x - 7, y - 33); break; //OK
        case 1: ctx.drawImage(player.sprites[1], x, y - 7); break; //OK
        case 2: ctx.drawImage(player.sprites[2], x - 7, y); break; //OK
        case 3: ctx.drawImage(player.sprites[3], x - 33, y - 7); break; //OK
    }
}

function updateOrientation(player, newOrientation) {
    if (((player.orientation + newOrientation) % 2) != 0) {
        player.orientation = newOrientation;
        player.path.push({x: player.actualPoint.x, y: player.actualPoint.y});
    }
}

function moveMoto(player) {
    switch (player.orientation) {
        case 0:player.actualPoint.y = player.actualPoint.y - player.speed; break;
        case 1:player.actualPoint.x = player.actualPoint.x + player.speed; break;
        case 2:player.actualPoint.y = player.actualPoint.y + player.speed; break;
        case 3:player.actualPoint.x = player.actualPoint.x - player.speed; break;
    }
}

function dectectCollision(player) {
    switch (player.orientation) {
        case 0: return (player.actualPoint.y - 33) < 0;
        case 1: return (player.actualPoint.x + 33) > screenX;
        case 2: return (player.actualPoint.y + 33) > screenY;
        case 3: return (player.actualPoint.x - 33) < 0;
    }
}   

function detectCollisionWithPlayer(player, playerWall) {
    for (var i = 1; i < player.path.length; i++) {
        if (playerWall.path[i - 1].x == playerWall.path[i].x) {
            //horizontal wall 
            if (player.orientation == 1) {
                //go right
                if ((player.actualPoint.x + 33) < playerWall.path[i].x) {
                    if ((player.actualPoint.x + 33 + player.speed) > playerWall.path[i].x) {
                        //check the bound of the point
                            return true;
                    }
                }
            } else if (player.orientation == 3) {
                //go left
                if ((player.actualPoint.x - 33) > playerWall.path[i].x) {
                    if ((player.actualPoint.x - 33 - player.speed) < playerWall.path[i].x) {
                        return true
                    }
                }
            }
        } else {
            if (player.orientation == 0) {
                //go up
                if ((player.actualPoint.y - 33) > playerWall.path[i].y) {
                    if ((player.actualPoint.y - 33 - player.speed) < playerWall.path[i].y) {
                        return true
                    }
                }
            } else if (player.orientation == 2) {
                //go down
                if ((player.actualPoint.y + 33) < playerWall.path[i].y) {
                    if ((player.actualPoint.y + 33 + player.speed) > playerWall.path[i].y) {
                        return true
                    }
                }
            }
        }
    }
}

function mainLoop() {
    //clear screen
    ctx.clearRect(0, 0, screenX, screenY);
    //redraw the thingy
    drawPath(ownMoto);
    drawMoto(ownMoto);
    ctx.save()
    if (detectCollisionWithPlayer(ownMoto, ownMoto)) {
        alert("LOST")
    }
    if (dectectCollision(ownMoto)) {
        alert("PERDUUUUUUUU");
        clearInterval(gameloopId);
    }
    moveMoto(ownMoto);
}

//Start/stop the game loop (and more importantly that annoying boinging!)
function toggleGameplay()
{
    gameRunning = !gameRunning;
    if(gameRunning) {
        init();
        clearInterval(gameloopId);
        gameloopId = setInterval(mainLoop, mainLoopDelay);
    } else {
        clearInterval(gameloopId);
        //clear canvas
        ctx.clearRect(0, 0, screenX, screenY);
        ctx.save();
    }
}
