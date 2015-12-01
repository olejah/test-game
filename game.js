/**
 * Created by Олег on 01.12.15.
 */
window.onload = init;

var game = {};

var init = function () {
    game.map = document.getElementById("map");
    game.ctxMap = game.map.getContext("2d");
    game.drawBtn = document.getElementById("drawBtn");
    game.clearBtn = document.getElementById("clearBtn");

    drawRect.addEventListener("click", drawRect(), false);
    clearRect.addEventListener("click", clearRect(), false);
};

function drawRect(){
    game.ctxMap.fillStyle = "#303030";
    game.ctxMap.fillRect(10,10,100,100);
}

function clearRect(){
    game.ctxMap.clearRect(0,0,800,500)
}