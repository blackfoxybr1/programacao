function setup() {
    createCanvas(600, 600);
    background("limegreen");
  }
  function draw() {
    stroke("lightgreen");
    fill("darkgreen");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 45);
    }
  }