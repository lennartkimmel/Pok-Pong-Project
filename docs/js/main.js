"use strict";
var Ball = (function () {
    function Ball() {
        var _this = this;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.xspeed = 3;
        this.yspeed = 3;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.div.addEventListener("click", function () { return _this.catchBall(); });
    }
    Ball.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x >= window.innerWidth) {
            this.xspeed *= -1;
            console.log("bounce!");
        }
        if (this.y >= window.innerHeight) {
            this.yspeed *= -1;
            console.log("bounce!");
        }
        if (this.x >= -window.innerWidth) {
            this.xspeed *= 1;
            console.log("werkt!");
        }
        if (this.y >= -window.innerHeight) {
            this.yspeed *= 1;
            console.log("werkt!");
        }
    };
    Ball.prototype.create = function () {
    };
    Ball.prototype.catchBall = function () {
        this.div.remove();
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        this.gameLoop();
        console.log("de game is begonnen!");
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ball.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 87;
        this.downkey = 83;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map