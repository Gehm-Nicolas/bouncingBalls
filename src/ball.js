"use strict";

export default class Ball {
    constructor(ctx, x = 0, y = 0, velX = 1, velY = 1, color = "blue", radius = 4){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.radius = radius;
    }

    // function to draw the ball
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.ctx.fill();
    }

    // function to move the ball, updating its parameters
    update() {
        if ((this.x + this.radius) >= window.innerWidth) {
            this.velX = -(this.velX);
        }
        if ((this.x + this.radius) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.radius) >= window.innerHeight){
            this.velY = -(this.velY);
        }
        if ((this.y + this.radius) <= 0){
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect(balls) {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
              const dx = this.x - balls[j].x;
              const dy = this.y - balls[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
        
              if (distance < this.radius + balls[j].radius) {
                return balls[j];
              }else{
                  return false;
              }
            }
        }
    }
}
