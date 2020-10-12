class Box extends Hit {
  constructor(x, y){
    super(x,y,50,50);
    this.visiblity=255
    this.image = loadImage("wood1.png");
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<3){
      super.display();
    }
    else{
      push();
      this.visiblity = this.visiblity-5;
      tint(255,this.visiblity-5);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      World.remove(world,this.body);
    }
  }

  score(){
    if(this.Visiblity<0&&this.Visiblity>-105){
       score++;
    }
  }
  

}