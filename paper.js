class paper{

    constructor(x,y){
        this.body = Bodies.circle(x,y,70);
        this.radius = 70;
        this.image1 = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position
        
        imageMode(CENTER);
        image(this.image1,pos.x,pos.y,this.radius);

    }
}