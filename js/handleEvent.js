var keys = [];

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
document.onkeydown=function(){return event.keyCode!=38 && event.keyCode!=40}