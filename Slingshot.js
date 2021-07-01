class Slingshot{
    constructor(object1, object2){
        var option = {
            bodyA:object1,
            pointB:object2,
            stiffness:0.04,
            length:10
        }
        this.slingshot = Constraint.create(option);
        this.pointB = object2;
        World.add(world, this.slingshot)
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        //name spacing
        if(this.slingshot.bodyA!==null){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
} 