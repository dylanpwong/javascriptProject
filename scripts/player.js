
// const fire = require('./fire.js')
// import {fire} from './fire.js';
document.addEventListener('DOMContentLoaded',()=>{
    // const fire = require('./fire.js');
    var canvas = document.getElementById("myGame");
    var ctx = canvas.getContext("2d");

    var sideCanvas = document.getElementById("mySide");
    var ctxSide = sideCanvas.getContext("2d");

    sideCanvas.wdith =1000;
    sideCanvas.height =500;
    // canvas.width = 600;
    // canvas.height = 300;
    // console.log(canvas.width);
    // console.log(canvas.height);
    // sideCanvas.style.width= sideCanvas.width;
    // sideCanvas.style.height=sideCanvas.height;

    let aquaSprites={
      /// left and right
      rightIdle: "./images/aqua/aquaRightIdle.png",
      leftIdle: "./images/aqua/aquaLeftIdle.png",
      rightStart: "./images/aqua/aquaRightStart.png",
      leftStart: "./images/aqua/aquaLeftStart.png",
      rightWalk: "./images/aqua/aquaRightWalk.png",
      leftWalk: "./images/aqua/aquaLeftWalk.png",
      ////
      upIdle: "./images/aqua/aquaUpIdle.png",
      downIdle: "./images/aqua/aquaDownIdle.png",
      upStart: "./images/aqua/aquaUpStart.png",
      downStart: "./images/aqua/aquaDownStart.png",
      upWalk: "./images/aqua/aquaUpWalk.png",
      downWalk: "./images/aqua/aquaDownWalk.png",
    }

    let darknessSprites={
      /// left and right
      rightIdle: "./images/darkness/darknessRightIdle.png",
      leftIdle: "./images/darkness/darknessLeftIdle.png",
      rightStart: "./images/darkness/darknessRightStart.png",
      leftStart: "./images/darkness/darknessLeftStart.png",
      rightWalk: "./images/darkness/darknessRightWalk.png",
      leftWalk: "./images/darkness/darknessLeftWalk.png",
      ////
      upIdle: "./images/darkness/darknessUpIdle.png",
      downIdle: "./images/darkness/darknessDownIdle.png",
      upStart: "./images/darkness/darknessUpStart.png",
      downStart: "./images/darkness/darknessDownStart.png",
      upWalk: "./images/darkness/darknessUpWalk.png",
      downWalk: "./images/darkness/darknessDownWalk.png",
    }
    let meguSprites = {
      /// left and right
      rightIdle: "./images/meguminRightIdle.png",
      leftIdle: "./images/meguminLeftIdle.png",
      rightStart: "./images/meguminIdle.png",
      leftStart: "./images/meguminfacingleft.png",
      rightWalk: "./images/meguminWalking.png",
      leftWalk: "./images/meguminWalkingLeft.png",
      ////
      upIdle: "./images/facingup/meguminUpStanding.png",
      downIdle: "./images/facingDown/meguminfacedownIdle.png",
      upStart: "./images/facingup/meguminfacingup.png",
      downStart: "./images/facingDown/meguminfacingdown.png",
      upWalk: "./images/facingup/meguminUp2.png",
      downWalk: "./images/facingDown/maguminwalkingdown.png",
    };

    let kazumaSprites = {
      rightIdle: "./images/kazumaSprites/kazumaStandRight.png",
      leftIdle: "./images/kazumaSprites/KazumaStandLeft.png",
      rightStart: "images/kazumaSprites/kazumaStartRight.png",
      leftStart: "./images/kazumaSprites/kazumaStartLeft.png",
      rightWalk: "./images/kazumaSprites/kazumaWalkRight.png",
      leftWalk: "./images/kazumaSprites/kazumaWalkLeft.png",
      //
      upIdle: "./images/kazumaSprites/kazumaFacingUpIdle.png",
      downIdle: "./images/kazumaSprites/kazumaFaceDownIdle.png",
      upStart: "./images/kazumaSprites/kazumaStartUp.png",
      downStart: "./images/kazumaSprites/kazumaStartDown.png",
      upWalk: "./images/kazumaSprites/kazumaUpWalk.png",
      downWalk: "./images/kazumaSprites/kazumaWalkDown.png",
    };

    let slashes = {
      f1: "./images/slashes/slash2.png",
      f2: "./images/slashes/slash3.png",
      right: "./images/slashes/slashright.png",
      up: './images/slashes/slashUp.png',
      down: './images/slashes/slashdown.png',
      left: './images/slashes/slashLeft.png',

    };
    var megumin = new Image();
    var kazuma = new Image();
    var darkness =new Image();
    var aqua =new Image();
    var slash = new Image();
    var enemy = new Image();
    var bg =new Image();
    bg.src ='./images/chicknzone.jpg';
    slash.src = slashes.f1;
    let KazumaHealth = 100;
    let MeguminHealth =100;
    let AquaHealth = 100;
    let DarknessHealth=100;
    let score =0;

    let charSelect =0;
    var protagonistArray=[kazuma,megumin,darkness,aqua];
    var spritesArray=[kazumaSprites,meguSprites,darknessSprites,aquaSprites];

    var protagonist = protagonistArray[charSelect];
    var protagonistSprites = spritesArray[charSelect];
    // megumin.src="./images/meguminIdle.png";
    
    var meguminWalkRight = new Image();
    meguminWalkRight.src = './images/meguminWalking.png';

    let x = canvas.width/2;
    let y = canvas.height/2;
    let dx = 2;
    let dy = -2;
    // Enemy
    let enemyArray = [];
    // bullets

    let currentSlash={
      x: null,
      y: null
    };
    //level
      let levelBuffer=0;
      let levelLimit=700;
      let levelCounter=0;
      let pause =false;
      let lose =false;
      let damageStack=0;
    //

    let cooldownActive = false;
    let explosionRelease = false;
    let firePressed =false;
    let playerBullets=[];
    let fireFrameCounter =0;
    let explosionFrameCounter=0;
    let EXPLOSION = 1000;
    let fireLimit = 5;
    let explosionCooldown=1000;
    let cooldownCounter=1001;
    //slash
    let canSlash=true;
    //
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;
    let standingStill = true;
    let walkingFrame=true;
    let frameCounter= 0;
    let frameCounterLimit =7;
    let facing ={
        left: false,
        right: true,
        up: false,
        down: false,
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctxSide.clearRect(0, 0, sideCanvas.width, sideCanvas.height);
        ctx.drawImage(bg,0,0,canvas.width,canvas.height);
        // console.log(x,y);
        drawGithub();
        drawScore();
        // ctx.drawImage(slash, 20, 20,30,30);
        if(!pause){
          if(!lose){

            movement();
            enemyHandler();
            playerFire();
            cooldownHandler();
            hpRegen();
            gameOver();
          }else{//you lost
            drawLose();
          }
        }else{
          pauseScreen();
        }
        healthbar();
        // gameOver();
        // console.log(currentSlash.x);
        requestAnimationFrame(draw);
    }


    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("keydown", fireHandler, false);
    draw();
    spawner(5);

    function drawGithub(){
      ctxSide.beginPath()
      ctxSide.fillStyle = "black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";

      ctxSide.fillText("GitHub", sideCanvas.width * .3, sideCanvas.height * 0.9);

      ctxSide.closePath();
    }
    function  movement(){
        if (standingStill) {
          if (facing.right) {
            protagonist.src = protagonistSprites.rightIdle;
          } else if (facing.left) {
            protagonist.src = protagonistSprites.leftIdle;
          } else if (facing.up) {
            protagonist.src = protagonistSprites.upIdle;
          } else if (facing.down) {
            protagonist.src = protagonistSprites.downIdle;
          }
          ctx.drawImage(protagonist, x, y, 25, 25);
        }
         if (rightPressed) {
           protagonist.src = walkingFrame
             ? protagonistSprites.rightStart
             : protagonistSprites.rightWalk;
           ctx.drawImage(protagonist, x, y, 25, 25);
           x += dx;
           if (x + 25 > canvas.width) {
             x = canvas.width - 25;
           }
           if (frameCounter >= frameCounterLimit) {
             walkingFrame = !walkingFrame;
             frameCounter = -1;
           }
           frameCounter++;
         } else if (leftPressed) {
           protagonist.src = walkingFrame
             ? protagonistSprites.leftStart
             : protagonistSprites.leftWalk;
           ctx.drawImage(protagonist, x, y, 25, 25);

           x -= dx;
           if (x < 0) x = 0;
           if (frameCounter >= frameCounterLimit) {
             walkingFrame = !walkingFrame;
             frameCounter = -1;
           }
           frameCounter++;
         } else if (upPressed) {
           protagonist.src = walkingFrame
             ? protagonistSprites.upStart
             : protagonistSprites.upWalk;
           ctx.drawImage(protagonist, x, y, 25, 25);
           y += dy;
           if (y < 0) y = 0;
           if (frameCounter >= frameCounterLimit) {
             walkingFrame = !walkingFrame;
             frameCounter = -1;
           }
           frameCounter++;
         } else if (downPressed) {
           protagonist.src = walkingFrame
             ? protagonistSprites.downStart
             : protagonistSprites.downWalk;
           ctx.drawImage(protagonist, x, y, 25, 25);
           y -= dy;
           if (y + 25 > canvas.height) {
             y = canvas.height - 25;
           }
           if (frameCounter >= frameCounterLimit) {
             walkingFrame = !walkingFrame;
             frameCounter = -1;
           }
           frameCounter++;
         }
    }

    function gameOver(){
      if(MeguminHealth<=0||KazumaHealth<=0||DarknessHealth<=0||AquaHealth<=0){
        // alert("Game Over");
        lose =true;
        // document.location.reload();
      }
    }
    function drawLose(){
      ctx.beginPath();
      ctx.fillStyle = "rgba(3,232,252,.5)";
      // ctx.globalAlpha = .2;
      ctx.rect(0, canvas.height / 2 - 30, canvas.width, canvas.height * .5);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "2em sans-serif";

      ctx.fillText("Game Over!", canvas.width * .2, canvas.height / 2);
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "1.5em sans-serif";

      ctx.fillText("Press Space to play again!", canvas.width*.03, canvas.height * .7);
      ctx.closePath();
    }
    function playerFire(){
        if (firePressed) {
          // drawBullet(x,y);
          if (fireFrameCounter < fireLimit) {
            fireFrameCounter++;
          } else {
            let b1 = createBullet(x, y);
            playerBullets.push(b1);
            fireFrameCounter = -1;
          }
        }
        bulletHandler();
    }

    function cooldownHandler(){
        if(cooldownCounter<300){
          cooldownActive=true;
          firePressed = true;
          cooldownCounter++;
        }else if(cooldownCounter<explosionCooldown){
          if(charSelect == 1) firePressed =false;
          // if(charSelect !=1) firePressed =true; 
          cooldownCounter++;
          explosionRelease =false;
          playerBullets = [];
          // console.log(cooldownCounter);
        }else if(cooldownActive){
          explosionFrameCounter = 0;
          cooldownActive= false;
          // console.log(explosionFrameCounter);
        }
    }
    function enemyHandler(){
      let aliveEnemies=[];
      if (enemyArray.length >= 1) {
        // ctx.globalAlpha =1;
        for (let i = 0; i < enemyArray.length; i++) {
          if(enemyArray[i].alive){
            enemyArray[i].render();
            enemyArray[i].update();
            aliveEnemies.push(enemyArray[i]);
          }else{ //not alive

          }
          // console.log(enemyArray.length)
        }
        enemyArray = aliveEnemies;
      }else{ //no enemies
        // console.log("next");
          if(levelBuffer< levelLimit){
            drawNextLevel();
            levelBuffer++;
          }else{
            levelBuffer=0;
            levelCounter++;
            damageStack +=1;
            if(levelCounter >2){
              canvas.width=600;
              canvas.height=300;
              levelCounter+=20;
            }
            spawner(5+levelCounter);
          }
      }
    }

    function drawScore(){
      ctxSide.beginPath()
      ctxSide.fillStyle = "black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";

      ctxSide.fillText(`Score: ${score}`, sideCanvas.width * .3, sideCanvas.height * 0.50);

      ctxSide.closePath();
    }
    function hpRegen(){
      if (charSelect!=2){
        if(DarknessHealth < 100)DarknessHealth+=.05;
      }
      if(charSelect == 3){
        if(MeguminHealth < 100) MeguminHealth+=.01;
        if(KazumaHealth < 100) KazumaHealth+=.01;
      }
    }

    function pauseScreen(){
      ctx.beginPath();
      ctx.fillStyle = "rgba(3,232,252,.5)";
      // ctx.globalAlpha = .2;
      ctx.rect(0, canvas.height / 2 - 30, canvas.width, canvas.height * .3);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "2em sans-serif";

      ctx.fillText("Pause", canvas.width * .2, canvas.height / 2);
      ctx.closePath();
    }

    function drawNextLevel(){
      ctx.beginPath();
      ctx.fillStyle ="rgba(3,232,252,.5)";
      // ctx.globalAlpha = .2;
      ctx.rect(0,canvas.height/2 -30,canvas.width,canvas.height *.3);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "2em sans-serif";

      ctx.fillText("Next Day!", canvas.width * .2, canvas.height/2);
      ctx.closePath();
    }

    function healthbar(){
      //Kazuma Healthbar
      ctxSide.beginPath();
      ctxSide.fillStyle="#00FF00";
      ctxSide.rect(0, 0, sideCanvas.width * KazumaHealth/100,sideCanvas.height * 0.10);
      ctxSide.fill();
      ctxSide.stroke();
      // ctx.closePath();
      ctxSide.closePath();
      
      ctxSide.beginPath()
      ctxSide.fillStyle ="black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";
      
      ctxSide.fillText("Kazuma", sideCanvas.width * .3, sideCanvas.height * 0.08);

      ctxSide.closePath();
      // ctxSide.save();
      //Megumin Health
      ctxSide.beginPath();
      ctxSide.fillStyle = "#DC143C";
      ctxSide.rect(0, sideCanvas.height * .1, sideCanvas.width * MeguminHealth / 100, sideCanvas.height * 0.10);
      ctxSide.fill();
      ctxSide.stroke();
      // ctx.closePath();
      ctxSide.closePath();

      ctxSide.beginPath()
      ctxSide.fillStyle = "black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";

      ctxSide.fillText("Megumin", sideCanvas.width * .3, sideCanvas.height * 0.18);

      ctxSide.closePath();
      //Aqua Health
      ctxSide.beginPath();
      ctxSide.fillStyle = "#18c2f6";
      ctxSide.rect(0, sideCanvas.height * .2, sideCanvas.width * AquaHealth / 100, sideCanvas.height * 0.10);
      ctxSide.fill();
      ctxSide.stroke();
      // ctx.closePath();
      ctxSide.closePath();

      ctxSide.beginPath()
      ctxSide.fillStyle = "black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";

      ctxSide.fillText("Aqua", sideCanvas.width * .3, sideCanvas.height * 0.28);

      ctxSide.closePath();
      // darkness
      ctxSide.beginPath();
      ctxSide.fillStyle = "#fce09e";
      ctxSide.rect(0, sideCanvas.height * .3, sideCanvas.width * DarknessHealth / 100, sideCanvas.height * 0.10);
      ctxSide.fill();
      ctxSide.stroke();
      // ctx.closePath();
      ctxSide.closePath();

      ctxSide.beginPath()
      ctxSide.fillStyle = "black";
      ctxSide.fill();
      ctxSide.font = "2em sans-serif";

      ctxSide.fillText("Darkness", sideCanvas.width * .3, sideCanvas.height * 0.38);

      ctxSide.closePath();
    }

    function drawWaterBullet(posX,posY){
      let ballRadius =5;
      ctx.beginPath();
      ctx.arc(posX,posY,ballRadius,0,Math.PI *2);
      ctx.fillStyle="#00cccc";
      ctx.fill();
      ctx.closePath();
    }
    function drawBullet(posX,posY){
        let ballRadius = 5;
        // let posX = x;
        // let posY =y;
        // let speed = 2;
         ctx.beginPath();
         // ctx.arc(x, y, 10, 0, Math.PI * 2);
         ctx.arc(posX, posY, ballRadius, 0, Math.PI * 2);
        //  posX+=speed;
        let orange = "#E25822";
        let otherRed= "#da3615";
        let red = '#7C0A02';
        let crimson ="#DC143c";
        let lightRed="#e3820d";
        let mustard="##9e0107";
        let yellow="#e5db15";
      let colors=[orange,red,lightRed,red,mustard,otherRed,crimson,yellow,crimson];
        randColor = Math.floor(Math.random() * 9);
         ctx.fillStyle = colors[randColor];
         ctx.fill();
         ctx.closePath();
    }

    function drawSlash(posX,posY,slashDir){
        let ballRadius = 10;
         ctx.beginPath();
         // ctx.arc(x, y, 10, 0, Math.PI * 2);
        //  ctx.arc(posX, posY, ballRadius, 0, Math.PI);
         //  posX+=speed;
         ctx.moveTo(posX+slashDir.startX,posY+slashDir.startY);
         ctx.quadraticCurveTo(posX+slashDir.secondX,posY + slashDir.secondY,posX + slashDir.x,posY+slashDir.y);
         ctx.fillStyle = "#39ff14";
         ctx.fill();
         ctx.closePath();
    }
     function drawSlash2(posX, posY, slashDir) {
       let ballRadius = 10;
       ctx.beginPath();
      
       ctx.rect(posX+slashDir.startX,posY+slashDir.startY,3,3);
    //    ctx.rect(20,20,150,100);
       ctx.fillStyle = "#39ff14";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();
     }
     function drawSlash3(posX, posY, slashDir,dir) {
   
        switch(dir){
          case "left":
            ctx.drawImage(slash,posX - 20,posY - 35 ,60,60);
            currentSlash.x = posX - 20; //sets up slash hurt box
            currentSlash.y = posY - 35;
            break;
          case "right":
            ctx.drawImage(slash, posX - 10, posY - 20, 30, 30);
            currentSlash.x = posX - 10;
            currentSlash.y = posY -20;
            break;
          case 'up':
            ctx.drawImage(slash, posX - 30, posY - 25, 60, 60);
            currentSlash.x = posX - 30;
            currentSlash.y = posY -25;
            break;
          case 'down':
            ctx.drawImage(slash, posX -30, posY -40, 60, 60);
            currentSlash.x = posX - 30;
            currentSlash.y = posY -40;
            break;
        }
       

   
     }

     function drawExplosion(pos){
       
     }
    function bulletHandler(){
        let updatedBullets=[];
        for(let i =0;i<playerBullets.length;i++){
            if(playerBullets[i].alive){
                playerBullets[i].render();
                playerBullets[i].update();
                updatedBullets.push(playerBullets[i])
            }
        }
        playerBullets = updatedBullets;
        // if(playerBullets.length == 0 && explosionFrameCounter >= EXPLOSION) cooldownCounter =0;
    };
    
    function createBullet(){
        let dir ;
        for(const key in facing){
            if(facing[key]) dir = key;
        }

        let bulletPos={
            x: (facing.left) ? x - 10 : (facing.right) ? x + 10 : x,
            y: (facing.down) ? y + 10: (facing.up) ? y - 20 : y,
        }
        let bullets = new bullet(bulletPos.x,bulletPos.y,dir);
            bullets.render = function () {
                if (this.alive) {
                    // console.log(protagonist);
                    switch(charSelect){
                        case 1:
                                drawBullet(this.x,this.y);
                            break;
                        case 0:
                            slash.src = slashes[dir];
                            currentSlash.x = this.x;
                            currentSlash.y = this.y;
                            drawSlash3(this.x,this.y,this.slashDir,dir);
                            break;
                        case 2:
                        slash.src = slashes[dir];
                        currentSlash.x = this.x;
                        currentSlash.y = this.y;
                        drawSlash3(this.x, this.y, this.slashDir, dir);
                        break;

                        case 3:
                          drawWaterBullet(this.x,this.y);
                    }
                    // drawBullet(this.x,this.y);
                    // drawSlash(this.x,this.y);
                }
            };
          bullets.update = function () {
                if (this.alive) {
                    switch(charSelect){
                        case 3: //megumin straight bullets
                            switch(dir){
                                case "up":
                                    this.y -=20;
                                    break;
                                case "down":
                                    this.y +=10;
                                    break;
                                case "left":
                                    this.x -=10;
                                    break;
                                case "right":
                                    this.x +=10;
                                    break;
                            }
                        
                        if (this.x >= canvas.width || this.y >= canvas.height || this.y <= 0 || this.x <= 0) {
                          this.alive = false;
                        }
                        for (let ene = 0; ene < enemyArray.length; ene++) {
                          if (enemyArray[ene].x < this.x + 10 && enemyArray[ene].x > this.x - 10) {
                            if (enemyArray[ene].y < this.y + 10 && enemyArray[ene].y > this.y - 10) {
                              enemyArray[ene].health -= 5;
                            }
                          }
                        }
                            break;
                        case 0:
                            switch (dir) {
                              case "up":
                                  // slash.src = slashes.up;
                                  if(this.slashLife >=5){
                                    currentSlash.x =null;
                                    currentSlash.y =null;
                                    this.alive =false;

                                  }else{
                                    this.slashLife++;
                                  }
                                break;
                              case "down":
                                if (this.slashLife >= 5) {
                                  currentSlash.x = null;
                                  currentSlash.y = null;
                                  this.alive = false;

                                } else {
                                  this.slashLife++;
                                }
                               
                                break;
                              case "left":
                                  // slash.src = slashes.left;
                                // this.slashDir.startY = -20;
                                if (this.slashLife >= 5) {
                                  currentSlash.x = null;
                                  currentSlash.y = null;
                                  this.alive = false;

                                } else {
                                  this.slashLife++;
                                }
                                break;
                              case "right":
                                if (this.slashLife >= 5) {
                                  currentSlash.x = null;
                                  currentSlash.y = null;
                                  this.alive = false;

                                } else {
                                  this.slashLife++;
                                }
                                
                                break;
                            }
                            break;
                        case 1: //megumin
                            
                            if(explosionRelease){
                              // if(this.explosionSize < 50){
                              //   this.x = (x+ 10) + 20 +(this.explosionSize++) * Math.sin(this.angle+= 0.2) ;//+ 10
                              // }else{
                              //   this.x = (x + 10) + 20 + (this.explosionSize) * Math.sin(this.angle += 0.2);//+ 10
                              // }
                              // this.y = (y + 10) - 20 - (this.explosionSize) * Math.cos(this.angle);// - 20
                              this.x = (canvas.width / 2) + (this.explosionSize++) * Math.sin(this.angle += 0.2);//+ 10
                              this.y = (canvas.height / 2)  + (this.explosionSize) * Math.cos(this.angle);// - 20
                              if (this.x >= canvas.width + 50 || this.y >= canvas.height + 50 || this.y <= -50 || this.x <= -50) {
                                this.alive = false;
                                // cooldownCounter = 0;
                              }
                              // console.log(this.explosionSize);
                              // explosionFrameCounter++;
                              //collision?
                              for(let ene =0;ene < enemyArray.length;ene++){
                                if(enemyArray[ene].x < this.x + 10 && enemyArray[ene].x > this.x -10){
                                  if(enemyArray[ene].y <this.y +10 && enemyArray[ene].y >this.y -10){
                                    enemyArray[ene].health -= 20;
                                  }
                                }
                              }
                            }else{
                              this.x = (x + 10) + 20 * Math.sin(this.angle += 0.2);//+ 20
                              this.y = (y + 10) - 20  * Math.cos(this.angle);// - 20
                              explosionFrameCounter++;
                            }
                            if(this.angle >=6) this.angle =0;
                            break;
                        case 2: 
                        switch (dir) {
                          case "up":
                            // slash.src = slashes.up;
                            if (this.slashLife >= 5) {
                              currentSlash.x = null;
                              currentSlash.y = null;
                              this.alive = false;

                            } else {
                              this.slashLife++;
                            }
                            break;
                          case "down":
                            if (this.slashLife >= 5) {
                              currentSlash.x = null;
                              currentSlash.y = null;
                              this.alive = false;

                            } else {
                              this.slashLife++;
                            }

                            break;
                          case "left":
                            // slash.src = slashes.left;
                            // this.slashDir.startY = -20;
                            if (this.slashLife >= 5) {
                              currentSlash.x = null;
                              currentSlash.y = null;
                              this.alive = false;

                            } else {
                              this.slashLife++;
                            }
                            break;
                          case "right":
                            if (this.slashLife >= 5) {
                              currentSlash.x = null;
                              currentSlash.y = null;
                              this.alive = false;

                            } else {
                              this.slashLife++;
                            }

                            break;
                        }
                        break;
                           
                    
                }
                 
            // if(this.x >= canvas.width || this.y >= canvas.height || this.y<= 0|| this.x <=0){
            //     this.alive = false;
            }
          };

        
        bullets.init();
        // bullets.render();
        return bullets;
    }

    
    function drawEnemy(x,y,img){
      
      ctx.drawImage(img,x,y,25,25);
    }
    function createMob(pos){
      let newMob = new Enemy(pos);//pos is an object
      // console.log(newMob.x);
      newMob.moveToLocation = function( destX, destY) {
        // console.log(`beginDest: ${destX}`)
        if (this.x < destX) { //moving right
          // console.log(currX);
          if(this.frameCounter<this.frameSwitch){
            this.img.src = this.sprites.rightWalk;
            this.frameCounter++;
          }else{
            this.img.src = this.sprites.rightStart;
            this.frameCounter++;
            if (frameCounterLimit < this.frameSwitch * 2) this.frameCounter = 0;
          }
          this.x += 1;
        } else if (this.y < destY) { //moving down
          if(this.frameCounter <this.frameSwitch){
            this.img.src = this.sprites.downWalk;
            this.frameCounter++;
          }else{
            this.img.src = this.sprites.downStart;
            this.frameCounter++;
            if(this.frameCounter > this.frameSwitch * 2) this.frameCounter=0;
          }
          this.y += 1;
        } else if (this.x> destX) { //moving left
          if(this.frameCounter < this.frameSwitch){
            this.img.src = this.sprites.leftWalk;
            this.frameCounter++;
          }else{
            this.img.src = this.sprites.leftStart;
            this.frameCounter++;
            if(this.frameCounter < this.frameSwitch * 2) this.frameCounter=0;
          }
          this.x -= 1;
        }
        else if (this.y > destY) { //moving up
          if(this.frameCounter < this.frameSwitch){
            this.img.src = this.sprites.upWalk;
            this.frameCounter++;
          }else{
            this.img.src = this.sprites.upStart;
            this.frameCounter++;
            if(this.frameCounter > this.frameSwitch *2) this.frameCounter =0;
          }
          this.y -= 1;
        }else{
          // console.log(this.x);
          // console.log(destX);
          this.wave =false;
        }
        //player takes damage
        // console.log(x,this.x)
        if(this.x < x +25 && this.x > x -25){
          if(this.y < y +25 && this.y > y -25)
          // console.log("Hit");
          switch(charSelect){
            case 0:
              KazumaHealth -=(1 + damageStack);
              break;
            case 1: 
              MeguminHealth -=(1.5 + damageStack);
              break;
            case 2:
              DarknessHealth -=(0.3 + damageStack*.5);
              break;
            case 3:
              AquaHealth -=(1.3 + damageStack);
              break;
          }
          // KazumaHealth -=1;
        }// mob takes damage from slash;
        if(currentSlash.x && this.x < currentSlash.x +30 && this.x > currentSlash.x -30){
            if(this.y < currentSlash.y + 30 && this.y > currentSlash.y -30){
              // console.log(`this.x: ${this.x}`);
              // console.log(`currentSlash: ${currentSlash.x}`);
              // console.log(charSelect);
              if(charSelect==0) this.health -= 20;
              if(charSelect==2) this.health -=3;
              // this.alive =false;
            }
        }
      }
      newMob.render=function(){
        
        drawEnemy(this.x,this.y,this.img);
      }
      newMob.update= function(){
        if(this.health <= 0) {
          this.alive = false;
          score +=100;
        }

        if(this.wave){
          this.moveToLocation(this.dest.x,this.dest.y);
        }else{
          let randX = Math.floor(Math.random() * (canvas.width - 25));
          let randY = Math.floor(Math.random() * (canvas.height - 25));
          // console.log(`my x: ${this.x}`)
          this.dest.x = randX;
          this.dest.y = randY;
          if(Math.random()>.2){
            this.dest.x = x;
            this.dest.y = y;
          }
          // console.log(`dest.x: ${this.dest.x}`);
          this.wave =true;
        }
      }

      return newMob;
    }


    function spawner(diff = 1 ){
      let randX = Math.floor(Math.random() * canvas.width);
       let randY = Math.floor(Math.random() * canvas.height);
       let baseY = (Math.floor(Math.random() * canvas.height) > canvas.height/2) ? canvas.height - 1 : 1;
       let  baseX = (Math.floor(Math.random() * canvas.height) > canvas.width/2) ? canvas.width - 1 : 1;

       let enemyPos={
            x: randX,
            y: baseY,
        }
       let enemyPos2={
            x: baseX,
            y: randY,
        }
      // console.log(randY);
        // let e1 = new Enemy((Math.random > 0.5) ? enemyPos: enemyPos2);
        // let e1 = createMob((Math.random() > 0.5) ? enemyPos : enemyPos2);
        // while( diff>0){
        //   enemyArray.push(e1);
        //   diff--;
        // }
        for(let mobs = 0; mobs< diff; mobs++){
          let e1 = createMob((Math.random() > 0.5) ? enemyPos : enemyPos2);
          enemyArray.push(e1)
        }
        // enemyArray.push(e1);


    }

    function bulletCollision(){

    }

     function fireHandler(e) {
       e.preventDefault();
         if(e.key=="Spacebar" || e.key==" "){
            // console.log("hello");
            //  fire(ctx,x,y,facing);
            // test();
            // createBullet();
            // KazumaHealth -=5;
            firePressed =true;
          //  if(cooldownCounter<=explosionCooldown){

          //  }else{
          //    firePressed=true;
          //  }
         }
    }
    function upExplosion(){
      if(!cooldownActive){
        if (explosionFrameCounter >= EXPLOSION){
          // console.log(explosionFrameCounter)
          cooldownCounter=0;
          explosionRelease=true;
        }

      }
    }
      
    function keyDownHandler(e){
      e.preventDefault();
              if(e.key=="p"){
                pause = !pause;
              }
              if (e.key == "Right" || e.key == "ArrowRight"|| e.key=="d") {
                standingStill =false;
                rightPressed = true;
                for(const key in facing){
                    facing[key]=false;
                }
                facing.right = true;
              } else if (e.key == "Left" || e.key == "ArrowLeft"|| e.key=="a") {
                standingStill=false;
                leftPressed = true;
                for (const key in facing) {
                  facing[key] = false;
                }
                facing.left =true;
              }else if(e.key=="Up" || e.key =="ArrowUp" || e.key=="w"){
                  standingStill =false;
                  upPressed = true;
                  facing.right =false;
                  for (const key in facing) {
                    facing[key] = false;
                  }
                  facing.up=true;
              }else if(e.key=="Down" || e.key=="ArrowDown" || e.key=="s"){
                standingStill=false;
                downPressed = true;
                facing.right=false;
                for (const key in facing) {
                  facing[key] = false;
                }
                facing.down=true;
              }
              else if(e.key=="q"){
                // protagonistArray
                if(charSelect - 1 < 0 ){
                  charSelect = protagonistArray.length - 1;
                }else{
                  charSelect--;
                }
                protagonist = protagonistArray[charSelect];
                protagonistSprites = spritesArray[charSelect];
                playerBullets = [];
              }else if(e.key=="e"){
                  if(charSelect + 1 >= protagonistArray.length){
                    charSelect = 0;
                  }else{
                      charSelect++;
                  }
                  protagonist= protagonistArray[charSelect];
                  protagonistSprites = spritesArray[charSelect];
                  playerBullets= [];
                // charSelect = 1;
              }
    }
    function keyUpHandler(e){
      e.preventDefault();
      
        if (e.key == "Right" || e.key == "ArrowRight"|| e.key=='d') {
          rightPressed = false;
          standingStill = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key=="a") {
          leftPressed = false;
          standingStill = true;
        }else if(e.key=="Up"||e.key=='w'||e.key=="ArrowUp"){
            upPressed = false;
            standingStill =true;
        }else if(e.key=="Down"||e.key=="s"||e.key=="ArrowDown"){
            downPressed =false;
            standingStill =true;
        }else if(e.key=="Spacebar"||e.key==" "){
          if(lose){document.location.reload();}
            firePressed =false;
            upExplosion();
        }
    }
    // window.onload = function () {
    //   start();
    //   update();
    // };
    
    // function start() {}
    
    // function update() {
    //   ctx.fillStyle = "red";
    //   ctx.fillRect(0, 0, 10, 10);
    // } 
    let logo = document.getElementById("logo");
  logo.onclick = () => window.open('https://github.com/dylanpwong/javascriptProject')
});


