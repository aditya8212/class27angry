class SLING{
    constructor(a,b){
        var options={
            bodyA : a,
            bodyB : b,
            stiffness:0.04,
            length:10

        }

    this.body = ma.create(options);
    World.add(world,this.body);

    }

    display(){

        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;

        strokeWeight(4);
        line(posa.x,posa.y,posb.x,posb.y);

    }

}