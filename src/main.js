"use strict";
import Ball from "./ball.js";

// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}

// ball's array
let balls = [];

while (balls.length < 25) {
    let radius = random(10,20);
    let ball = new Ball(
        /*ball position always drawn at least one ball width
        away from the edge of the canvas, to avoid drawing errors*/
        ctx,
        random(0 + radius, width - radius),
        random(0 + radius, height - radius),
        random(-7,7),
        random(-7,7),
        `rgb( ${random(0,255)}, ${random(0,255)}, ${random(0,255)})`,
        radius
    );

    balls.push(ball);
}

// control loop
function loop(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for(let i = 0; i < balls.length; i++){
        balls[i].draw();
        balls[i].update();
    }


    requestAnimationFrame(loop);
}

// let's the show begin
loop();