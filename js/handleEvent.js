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

function handleKeyDown(evt){
	keys[evt.keyCode] = true;
}

function handleKeyUp(evt){
	keys[evt.keyCode] = false;
}

//add event handler to surrounding DIV to monitor mouse move and update mushroom's x position
//    $("#container").mousemove(function(e){
//        mushroomX = e.pageX;
//    });

function handleInteractions(){

var vel = player.object.GetLinearVelocity();
	if (keys[38] && player.canJump){
		vel.y = -150;	
	}
	
	// left/right arrows
	if (keys[37]){
		vel.x = -60;
	}
	else if (keys[39]){
		vel.x = 60;
	}
	player.object.SetLinearVelocity(vel);
}

// disable vertical scrolling from arrows :)
document.onkeydown=function(event){return event.keyCode!=38 && event.keyCode!=40}
