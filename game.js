/**
 * Created by Олег on 01.12.15.
 */
var background = new Image();
background.src = "img/bg.jpg";

var tiles = new Image();
//tiles.src = "img/player.jpg";

var game = {},
    init = function () {

        game.map = document.getElementById("map");
        game.ctxMap = game.map.getContext("2d");

        game.player = document.getElementById("player");
        game.ctxPlayer = game.player.getContext("2d");

        //game.drawBtn = document.getElementById("drawBtn");
        //game.clearBtn = document.getElementById("clearBtn");

        game.map.width = game.width = 600;
        game.map.height = game.height = 270;

        game.player.height = 120;
        game.player.width = 90;

        //game.drawBtn.onclick = actions.drawRect;
        //game.clearBtn.onclick = actions.clearRect;

        //  background = new Image();
        // background.src = game.background.currentSrc = "bg.jpg";
        actions.drawBg();
        actions.drawPlayer();

    },

    actions = {
        drawRect: function () {
            game.ctxMap.fillStyle = "#3D3D3D";
            game.ctxMap.fillRect(10, 10, 50, 50);
            actions.drawBg();
        },
        clearRect: function () {
            game.ctxMap.clearRect(0, 0, 600, 270);
        },
        drawBg: function () {
            game.ctxMap.drawImage(background, 0, 0, game.width, game.height,
                0, 0, game.width, game.height);
        },
        drawPlayer: function () {
            game.ctxPlayer.drawImage(tiles, 0, 0, 120, 90, 0, 0, 120, 90);
        }
    };

window.onload = function () {
    init();
};


