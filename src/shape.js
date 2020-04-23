"use strict";

export default class Shape {
  constructor(ctx, x, y, velX, velY) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = true;
  }
}