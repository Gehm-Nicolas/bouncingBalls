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

while (balls.length < 5) {
    let radius = random(50,50);
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
    ctx.fillStyle = 'rgba(255, 255, 255, 1.25)';
    ctx.fillRect(0, 0, width, height);

    for(let i = 0; i < balls.length; i++){
        balls[i].draw();
        let ball = balls[i].collisionDetect(balls);
        if(ball){
            balls[i].color = ball.color = `rgb( ${random(0,255)}, ${random(0,255)}, ${random(0,255)} )`;
        }
        balls[i].update();
        
    }


    requestAnimationFrame(loop);
}

// let's the show begin
loop();