colours=["#00ffff","#00ff00","#800000", "#ffff00","#800080","#808000","#ff0000"];
let width = 700;
let height = 700;


class Rectangle{
    constructor(ctx,name, x, y, size, colour){
        this.ctx = ctx;
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = colour;
        this.dx = getRandomInt(10, 40)*(1-Math.round(Math.random())*2);
        this.dy = getRandomInt(10, 40)*(1-Math.round(Math.random())*2);
    }

    draw(){
        this.ctx.clearRect(0,0, canvas.width, canvas.height)
        this.ctx.beginPath();
        this.ctx.moveTo(this.x-this.size,this.y-this.size);
        this.ctx.lineTo(this.x-this.size,this.y+this.size);
        this.ctx.lineTo(this.x+this.size,this.y+this.size);
        this.ctx.lineTo(this.x+this.size,this.y-this.size);
        this.ctx.fillStyle = this.colour;
        this.ctx.fill(); 
    }

    move(){
        this.dx = (this.x+this.size+this.dx >= width || this.x-this.size+this.dx <= 0) ? -this.dx : this.dx;
        this.dy = (this.y+this.size+this.dy >= height || this.y-this.size+this.dy <= 0) ? -this.dy : this.dy;
        this.x = this.x+this.dx;
        this.y = this.y+this.dy;
        this.draw();
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    let rectangle = new Rectangle(ctx,"1", getRandomInt(40, 600), getRandomInt(40, 600), getRandomInt(15, 50), colours[Math.floor(Math.random()*colours.length)]);
    setInterval(() =>rectangle.move(), 100);
  }
}

draw();