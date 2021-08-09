class PlayerArcher{
    constructor(x,y,w,h) {
        var options = {
            isStatic:true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,this.w,this.h,options)
        this.image = loadImage("assets/playerArcher.png")
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,-PI/2)

    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle

        if (keyIsDown(DOWN_ARROW) && angle < -1.4) {
            angle += 0.01;
            Matter.Body.setAngle(this.body, angle);
          }
      
        if (keyIsDown(UP_ARROW) && angle > -1.7) {
            angle -= 0.01;
            Matter.Body.setAngle(this.body, angle);
        }

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}