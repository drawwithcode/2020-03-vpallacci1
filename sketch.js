let bubbles = [];
let pizza;
let phorrors = [];
var song;
var slider;

function preload() {
  pizza = loadImage('phorrors/pizza.png');
   for (let i = 0; i < 17; i++){
    phorrors[i] = loadImage ('phorrors/phorror' + i + '.jpg');
  }

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  song = loadSound("file.mp3", loaded);
  colorMode(HSB);
  slider = createSlider(0 ,10, 0, 0.5);
  slider.position(1230, 50);
  slider.style('width', '200px');


  push();
  rect(10, 45, 1200, 30);
  strokeWeight(1);
  noFill()
  pop();

  for (let i = 0; i < 40; i++){
  let x = random(width);
  let y = random(height);
  let r = random(300, 70);
  let phorror = random(phorrors);
  let b = new Bubble(x, y, r, phorror);
  bubbles.push(b);
  }
}

function loaded() {
    song.play();
}

function mousePressed () {
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw(){
  background('#e6414a');

  song.setVolume(slider.value());

  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
 }

 push();
 fill('white');
 textSize(30);
 textFont('piazzolla');
 text("SET AND PLAY", 1230, 40)
 pop();


 push();
 fill('white');
 textSize(30);
 textFont('piazzolla');
 text("PIZZA IS HOT", 10, 40)
 pop();
}


class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.phorror = img;
  }

clicked(px, py) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
    this.phorror = pizza; //random(phorrors);
  }
}

  move(){
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show(){
    image(this.phorror, this.x, this.y, this.r, this.r);
  }
}
