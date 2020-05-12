

yellowSlimeSpites={
    /// left and right
    rightIdle: "./images/yellowSlime/SlimesYIdleRight.png",
    leftIdle: "./images/yellowSlime/SlimesYIdleLeft.png",
    rightStart: "./images/yellowSlime/SlimesYRightStart.png",
    leftStart: "./images/yellowSlime/SlimesYStartLeft.png",
    rightWalk: "./images/yellowSlime/SlimesYRightWalk.png",
    leftWalk: "./images/yellowSlime/SlimesYWalkLeft.png",
    ////
    upIdle: "./images/yellowSlime/SlimesYUpIdle.png",
    downIdle: "./images/yellowSlime/SlimesYDownIdle.png",
    upStart: "./images/yellowSlime/SlimesUpStart.png",
    downStart: "./images/yellowSlime/SlimesYDownStart.png",
    upWalk: "./images/yellowSlime/SlimesUpWalk.png",
    downWalk: "./images/yellowSlime/SlimesYDownWalk.png",

    damageUp: './images/SlimesRedUp2.png',
    damageDown: './images/SlimesRedDown.png',
    damageLeft: './images/SlimesRedLeft.png',
    damageRight: './images/SlimesRedRight.png'
}

function Enemy(pos){
    this.health =100
    this.x = pos.x;
    this.y = pos.y;
    this.facing = {
        left: 'left',
        right: 'right',
        up: 'up',
        down: 'down'
    }
    this.currentDirection=null;
    this.directions = [];
    this.dest ={
        x: null,
        y: null
    }
    this.wave =false;
    this.sprites = yellowSlimeSpites;
    this.img = new Image();
    this.img.src= this.sprites.rightWalk;
    this.frameCounter =0;
    this.frameSwitch = 20;
    this.alive = true;
    this.init = function () {

    //   this.x += 12;
    //   this.y += 20;
    };
}