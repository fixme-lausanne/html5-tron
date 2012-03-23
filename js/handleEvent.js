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

function handleKeyDownPlayer1() {
    updateOrientation(ownMoto, 2)
}

function handleKeyUpPlayer1() {
    updateOrientation(ownMoto, 0)
}

function handleKeyRightPlayer1() {
    updateOrientation(ownMoto, 1)
}

function handleKeyLeftPlayer1() {
    updateOrientation(ownMoto, 3)
}

function handleKeyAPlayer1() {
    ownMoto.speed += 0.3
}

function handleKeyDownPlayer2() {
    updateOrientation(otherMoto, 2)
}

function handleKeyUpPlayer2() {
    updateOrientation(otherMoto, 0)
}

function handleKeyRightPlayer2() {
    updateOrientation(otherMoto, 1)
}

function handleKeyLeftPlayer2() {
    updateOrientation(otherMoto, 3)
}

function handleKeyAPlayer2() {
    otherMoto.speed += 0.3
}

function handleInteractions(e){
    var code = e.keyCode
    switch (code) {
        case 65: handleKeyLeftPlayer2(); break;
        case 87: handleKeyUpPlayer2(); break;
        case 68: handleKeyRightPlayer2(); break;
        case 83: handleKeyDownPlayer2(); break;
        case 81: handleKeyAPlayer2(); break;
        case 37: handleKeyLeftPlayer1(); break;
        case 38: handleKeyUpPlayer1(); break;
        case 39: handleKeyRightPlayer1(); break;
        case 40: handleKeyDownPlayer1(); break;
        case 40: handleKeyDownPlayer1(); break;
        case 191: handleKeyAPlayer2(); break;
    }
    return false
}

// disable vertical scrolling from arrows :)
//document.onkeydown=function(event){return event.keyCode!=38 && event.keyCode!=40}
