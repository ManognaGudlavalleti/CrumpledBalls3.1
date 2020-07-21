class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 8
        }
    //this.sling1 = loadImage("sprites/sling1.png");
    //this.sling2 = loadImage("sprites/sling2.png");
    //this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){
       // image(this.sling1,200,20);
        //image(this.sling2,170,20);

        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            console.log(pointA);
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(1);
            
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-4);
                //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(1);
            
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-4);
            //image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
            
            pop();
        }
    }
    
}
