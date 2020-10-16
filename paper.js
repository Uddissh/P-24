class Paper{
    constructor(x, y, width, height) {
    
    var opitions = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body = Bodies.circle(x, y, width, radius, opitions);
    this.width = width;
    this.radius = radius;

    }
}