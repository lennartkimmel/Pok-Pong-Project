class Ball {
    
    public div : HTMLElement
    public x : number
    public y : number

    public xspeed: number
    public yspeed: number
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        this.xspeed = 3
        this.yspeed = 3

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        this.div.addEventListener("click", () => this.catchBall())
    }
    
    public update() : void {
        // this.x++
        // this.y++
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        // Tel hier nog xspeed + yspeed bij elkaar op
        this.x += this.xspeed
        this.y += this.yspeed

        if(this.x >= window.innerWidth){
            this.xspeed *= -1
            console.log("bounce!")
            // console.log("die ben je kwijt")
        }

        if(this.y >= window.innerHeight) {
            this.yspeed *= -1
            console.log("bounce!")
            // console.log("die ben je kwijt")
        }

        if(this.x >= -window.innerWidth){
            this.xspeed *= 1
            console.log("werkt!")
            // console.log("die ben je kwijt")
        }

        if(this.y >= -window.innerHeight) {
            this.yspeed *= 1
            console.log("werkt!")
            // console.log("die ben je kwijt")
        }


        // if(this.y >= window.outerHeight) {
        //     this.yspeed *= +1
        //     console.log("die ben je kwijt")
        // }

        // if(this.x >= window.outerHeight) {
        //     this.xspeed *= +1
        //     console.log("die ben je kwijt")
        // }
    }
    
    public create(): void{
    }

    catchBall() {
        this.div.remove()
    }
}