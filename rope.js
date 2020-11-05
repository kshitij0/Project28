class Rope{
    constructor(bodyA,pointB){

        var ops={
            bodyA:bodyA,
            pointB:pointB,
            length:60,
            stiffness:0.2
            
        }
        this.pointB=pointB
        this.sling=Constraint.create(ops)
        World.add(world,this.sling)

    }
    detach(){
        this.sling.bodyA=null
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(7)
        line(pointB.x,pointB.y,pointA.x,pointA.y)

        }
    }


}