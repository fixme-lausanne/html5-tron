var keys = [];

var player = function(){
    this.object = null;
    this.canJump = false;
};

function initGame(){
    // create player ball
    var ballSd = new b2CircleDef();
    ballSd.density = 0.1;
    ballSd.radius = 12;
    ballSd.restitution = 0.5;
    ballSd.friction = 1;
    ballSd.userData = 'player';
    var ballBd = new b2BodyDef();
    ballBd.linearDamping = .03;
    ballBd.allowSleep = false;
    ballBd.AddShape(ballSd);
    ballBd.position.Set(20,0);
    player.object = world.CreateBody(ballBd);
}

function handleKeyDown() {
    updateOrientation(ownMoto, 2)
}

function handleKeyUp() {
    updateOrientation(ownMoto, 0)
}

function handleKeyRight() {
    updateOrientation(ownMoto, 1)
}

function handleKeyLeft() {
    updateOrientation(ownMoto, 3)
}

function handleKeyA() {
    ownMoto.speed += 0.3
}

function handleInteractions(e){
    var code = e.keyCode
    switch (code) {
		case 65: handleKeyA(); break;
        case 37: handleKeyLeft(); break;
        case 38: handleKeyUp(); break;
        case 39: handleKeyRight(); break;
        case 40: handleKeyDown(); break;
    }
    return false
}

// disable vertical scrolling from arrows :)
//document.onkeydown=function(event){return event.keyCode!=38 && event.keyCode!=40}
