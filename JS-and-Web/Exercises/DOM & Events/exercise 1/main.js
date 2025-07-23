const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");
const down = document.getElementById("down");
const ball = document.getElementById("ball");


let topPosition = 0;
let leftPosition = 0;

ball.style.top = topPosition + "px";
ball.style.left = leftPosition + "px";

up.onclick = function () {
    topPosition -= 26;
    ball.style.top = topPosition + "px";
};

down.onclick = function () {
    topPosition += 26;
    ball.style.top = topPosition + "px";
};

left.onclick = function () {
    leftPosition -= 26;
    ball.style.left = leftPosition + "px";
};

right.onclick = function () {
    leftPosition += 26;
    ball.style.left = leftPosition + "px";
};
