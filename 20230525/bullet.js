//定義一個bullet物件的class

// class Bullet{
//   constructor(args){
//     this.r = this.r || 20 
//     this.p = args.p || shipP.copy()   //createVector(width/2,height/2)
//     this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(10)
//     this.color = args.color || "#fb8b24"
//   }
//   draw(){
//     push()
//     translate(this.p.x,this.p.y)
//     fill(this.color)
//     noStroke()
//     ellipse(0,0,this.r)
//     pop()
//   }
//   update(){ //計算出移動後的位置
//     this.p.add(this.v)
//   }

// }
function heartShape(a) {
  let x = 16 * pow(sin(a), 3);
  let y = -13 * cos(a) + 5 * cos(2*a) + 2 * cos(3*a) + cos(4*a);
  return createVector(x, y);
}

class Bullet{
  constructor(args){
    this.r = this.r || 20 
    this.p = args.p || createVector(width/2,height/2)
    this.v = args.v || createVector(mouseX-width/2,mouseY-height/2).limit(10)
    this.color = args.color || "#fb8b24"
  }
  draw(){
    push()
    translate(this.p.x,this.p.y)
    fill(this.color)
    noStroke()
    beginShape()
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let point = heartShape(a);
      vertex(point.x, point.y);
    }
    endShape(CLOSE)
    pop()
  }
  update(){ //計算出移動後的位置
   this.p.add(this.v)
  }
}