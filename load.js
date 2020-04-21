var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

const dist = 70;

class Circle
{
  constructor(x,y,angle)
  {
    this.x = x;
    this.y = y;
    this.clock = angle;
    this.size = 20;
    this.fall = 0;
  }

  update()
  {
    this.size = Math.sin(this.clock/180*Math.PI)*4+3;
    this.clock-=4;
    this.fall+=0.4;
    if(this.size <= 0)this.fall = 0;
  }

  draw()
  {
    if(this.size>0)
    {
      c.beginPath();
      c.arc(this.x,this.y+this.fall,this.size,0,Math.PI*2);
      c.fill();
    }
  }
}

var circles = [];

for(let i=0;i<360;i+=24)
{
  let x = Math.cos(i/180*Math.PI)*dist+canvas.width/2;
  let y = Math.sin(i/180*Math.PI)*dist+canvas.height/2-50;
  circles.push(new Circle(x,y,i));
}

function animate()
{
  //c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle = "#010407";
  c.fillRect(0,0,canvas.width,canvas.height);
  c.fillStyle = "#AAAAAA";
  for(let i=0;i<360/24;i++)
  {
    circles[i].update();
    circles[i].draw();
  }
  if(!loaded)window.requestAnimationFrame(animate);
}
animate();
