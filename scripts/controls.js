


document.addEventListener('DOMContentLoaded',()=>{
    var canvas = document.getElementById("myControls");
    var ctx = canvas.getContext("2d");

    canvas.width =1000;
    canvas.height=200;

    function draw(){
        WASD();
        space();
        pauseB();
        switchChars();
        requestAnimationFrame(draw);
    }

    draw();

    function WASD(){
        ctx.beginPath();
        ctx.fillStyle = "rgba(169,82,85,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .16, canvas.height * .15, canvas.width * .089, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Move", canvas.width * .16, canvas.height * .35);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width *.02, canvas.height*.05, canvas.width * .11, canvas.height*.47);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("W", canvas.width * .03, canvas.height / 2);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .02, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("A", canvas.width * .03, canvas.height *.85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .1, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("S", canvas.width * .1, canvas.height * .85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .18, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("D", canvas.width * .18, canvas.height * .85);
        ctx.closePath();
    }

    function space(){

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .28, canvas.height * .55, canvas.width * .25, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("Space", canvas.width * .28, canvas.height * .85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(169,82,85,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .34, canvas.height * .15, canvas.width * .089, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Fire", canvas.width * .34, canvas.height * .35);
        ctx.closePath();
    }

    function pauseB(){
        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .58, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("P", canvas.width * .58, canvas.height * .85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(169,82,85,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .58, canvas.height * .15, canvas.width * .089, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Pause", canvas.width * .58, canvas.height * .35);
        ctx.closePath();
    }

    function switchChars(){
        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .68, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("Q", canvas.width * .68, canvas.height * .85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .88, canvas.height * .55, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "5em sans-serif";

        ctx.fillText("E", canvas.width * .88, canvas.height * .85);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "rgba(169,82,85,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .68, canvas.height * .15, canvas.width * .27, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Switch Charatcers", canvas.width * .68, canvas.height * .35);
        ctx.closePath();
    }

    function movementHightlighter(){

    }

    document.addEventListener("keydown",movementHightlighter,false);
})