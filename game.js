/**
 * Created by Олег on 01.12.15.
 */
(function (game) {
    var game = game || {},

        init = function () {

            game.map = document.getElementById("map");
            game.ctxMap = game.map.getContext("2d");

            game.drawBtn = document.getElementById("drawBtn");
            game.clearBtn = document.getElementById("clearBtn");

            game.map.width = game.width = 600;
            game.map.height = game.height = 270;

            game.drawBtn.onclick = actions.drawRect;
            game.clearBtn.onclick = actions.clearRect;

            game.background = new Image();
            game.background.src = "bg.jpg";
            actions.drawBg();
        },

        actions = {
            drawRect: function () {
                game.ctxMap.fillStyle = "#3D3D3D";
                game.ctxMap.fillRect(10, 10, 50, 50);
            },
            clearRect: function () {
                game.ctxMap.clearRect(0, 0, 600, 270);
            },

            drawBg: function () {
                console.log(game.background);
                game.ctxMap.drawImage(game.background, 0, 0, game.width, game.height,
                    0, 0, game.width, game.height);
            }
        };

        window.onload = function(){
            init();
        }
})();

