var canva

var moto = new Image()


function init() {
    
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
