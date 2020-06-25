


document.addEventListener('DOMContentLoaded',()=>{
    var canvas = document.getElementById("myControls");
    var ctx = canvas.getContext("2d");

    canvas.width =1000;
    canvas.height=200;
    let inst=false;
    function draw2(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(!inst){
            WASD();
            space();
            pauseB();
            switchChars();
        }else{
            instructions();
        }
        requestAnimationFrame(draw2);
        // requestAnimationFrame(draw);
    }

    draw2();

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
        ctx.rect(canvas.width * .80, canvas.height * .02, canvas.width * .18, canvas.height * .13);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "1em sans-serif";

        ctx.fillText("Press I for Instructions", canvas.width * .8, canvas.height * .1);
        ctx.closePath();

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

    function instructions(){
        ctx.beginPath();
        ctx.fillStyle = "rgba(3,232,252,.5)";
        // ctx.globalAlpha = .2;
        ctx.rect(canvas.width * .9, canvas.height * .1, canvas.width * .07, canvas.height * .33);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "3em Times new roman";

        ctx.fillText("I", canvas.width * .93, canvas.height * .35);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "1em sans-serif";

        ctx.fillText("Press I for Controls", canvas.width*.85, canvas.height * .5);
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Kazuma: hold space to swing sword for medium damage", 0, canvas.height * .15);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Megumin: hold space and release to trigger an EXPLOSION", 0, canvas.height * .30);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "1em sans-serif";

        ctx.fillText("Explosion has a cooldown and prevents aqua from using magic for a short time", 3, canvas.height * .4);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "#18c2f6";
        ctx.fill();
        ctx.font = "2em sans-serif";

        ctx.fillText("Aqua: hold space to deal weak magic damage", 0, canvas.height * .55);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "#18c2f6";
        ctx.fill();
        ctx.font = "1em sans-serif";

        ctx.fillText("Aqua runs fast! And heals all other members while she is out!", 0, canvas.height * .65);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "#fce09e";
        ctx.strokeStyle = 'black';
        ctx.font = "2em sans-serif";
        ctx.strokeText("Darkness: Hold space to deal weak slash damage", 0, canvas.height * .8);
        ctx.fillText("Darkness: Hold space to deal weak slash damage", 0, canvas.height * .8);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "#fce09e";
        ctx.strokeStyle='black';
        ctx.font = '2em sans-serif';
        ctx.strokeText("Darkness takes less damage and regens health when swapped out!", 0, canvas.height * .95);
        ctx.fillText("Darkness takes less damage and regens health when swapped out!", 0, canvas.height * .95);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    function movementHightlighter(e){
        e.preventDefault();
    }
    function instListen(e){
        e.preventDefault();
        if(e.key=='i'){
            inst = !inst;
        }
    }

    document.addEventListener("keydown",movementHightlighter,false);
    document.addEventListener("keydown",instListen);
})