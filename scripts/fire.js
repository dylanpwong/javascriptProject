





    // var canvas = document.getElementById("myGame");
    // var ctx = canvas.getContext("2d");
    
    let ballRadius = 10;
    let speedX = 2;
    let speedY =2
    const fire = function(ctx,locationX,locationY,direction){
    
    
    }


    const test=function(){
        console.log("test");
    }

    function bullet(posX,posY,dir){
        this.x = posX;
        this.y = posY;
        this.dir = dir;
        this.slashLife  = 0;
        this.slashDir={
            x: 0,
            y: 0,
            secondX: null,
            secondY: null,
            startX: null,
            startY: null,
            wave: false,
        }
        switch(dir){
            case "up":
                // this.slashDir.secondX = -40;
                // break;
            case "right":
                // this.slashDir.secondX = 20;
                // this.slashDir.secondY=-20;
                // break;
            case "left":
                this.slashDir.startX = 0;
                this.slashDir.startY = -20;
                break;
                
        }
        this.speed = 5;
        this.alive = true;
        this.init = function(){
            this.x += 12;
            this.y += 20;
        }
        // this.render = function(){
        //     if(this.alive){
        //         ctx.fillRect(this.x,this.y,10,10)
        //     }
        // }
        // this.update =function(){
        //     if(this.alive){
        //         this.x += 7;
        //     }
        // }
    }
// addEventListener("keydown",fireHandler,false);


// module.exports = fire;

