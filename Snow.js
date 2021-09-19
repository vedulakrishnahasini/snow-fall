class Snow {
    constructor(x, y) {
        var options = {
            friction: 1,
            restitution: 0.01,
        }
        this.image = loadImage("snow4.webp")
        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,30,30)
        pop()

    }

}