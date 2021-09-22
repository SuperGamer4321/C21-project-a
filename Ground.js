class Ground{

    constructor(x,y,w,h){
        var option = {
            isStatic : true   
        }

     this.body = Bodies.rectangle(x,y,w,h,option);
     World.add(myWorld,this.body);
     this.w = w;
     this.h = h;
    }

    display(){
        push();
        var posi = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(posi.x,posi.y,this.w,this.h);
        pop();
    }
}