class Rock{
    constructor(x,y){

        var ops={
            restitution:1,
            density:1

        }
        this.body=Bodies.rectangle(x,y,50,50,ops)
        this.image=loadImage("stone.png")
        World.add(world,this.body)




    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,50,50)
        pop() 

    }
}