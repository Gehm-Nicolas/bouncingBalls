"use strict";

import Shape from './shape.js'

export default class EvilBall extends Shape {
  constructor(ctx, x = 0, y = 0){
    super(ctx, x, y, 20.0, 20.0);
    this.color = "black";
    this.radius = 10.0;
  }

  // function to draw the evil ball
  draw() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 3.0;
      this.ctx.strokeStyle = this.color;
      this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
      this.ctx.stroke();
  }

  // function to keep the EvilBall inside the bounds
  checkBounds() {
      if ((this.x + this.radius) >= window.innerWidth) {
          this.x = window.innerWidth - this.radius;
      }
      if ((this.x - this.radius) <= 0) {
          this.x = this.radius;
      }

      if ((this.y + this.radius) >= window.innerHeight){
          this.y = window.innerHeight - this.radius;
      }
      if ((this.y - this.radius) <= 0){
          this.y = this.radius;
      }
  }

  // function of EvilBall control interface
  setControls() {
    let _this = this;
    window.onkeydown = event => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft': _this.x -= _this.velX;
                          break;
        case 'd':
        case 'ArrowRight': _this.x += _this.velX;
                           break;
        case 'w':
        case 'ArrowUp': _this.y -= _this.velY;
                        break;
        case 's':
        case 'ArrowDown': _this.y += _this.velY;
                          break;
        default: break;
      }
    }
  }

  collisionDetect(balls) {
    for (let j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.radius + balls[j].radius) {
          balls[j].exists = false;
        }
      }
    }
  }
}
