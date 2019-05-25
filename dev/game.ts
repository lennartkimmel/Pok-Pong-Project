// import { Ball } from "ball.ts";

class Game {
    
    private ball: Ball;
    
    constructor() {
        this.ball = new Ball()
        this.gameLoop()
        console.log("de game is begonnen!")
    }
    
    private gameLoop(){
        this.ball.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())