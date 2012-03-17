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
    ownOrientation = 2
}

function handleKeyUp() {
    ownOrientation = 0
}

function handleKeyRight() {
    ownOrientation = 1
}

function handleKeyLeft() {
    ownOrientation = 3
}

//add event handler to surrounding DIV to monitor mouse move and update mushroom's x position
//    $("#container").mousemove(function(e){
//        mushroomX = e.pageX;
//    });

function handleInteractions(e){
    var code = e.keyCode
    switch (code) {
    	case 37: handleKeyLeft(); break;
    	case 38: handleKeyUp(); break;
    	case 39: handleKeyRight(); break;
    	case 40: handleKeyDown(); break;
    }
    return true
}

// disable vertical scrolling from arrows :)
//document.onkeydown=function(event){return event.keyCode!=38 && event.keyCode!=40}
