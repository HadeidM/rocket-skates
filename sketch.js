////////////////////////////////////////////////
// Author : Hadeid Mirza
// Description: Interactive Art Experience 
//              created using the p5.js framework
////////////////////////////////////////////////
let skates;
function preload() {
  skates = loadModel('skates.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  detailX = createSlider(3, 24, 3);
  detailX.position(0, windowHeight + 149);
  detailX.style('width', '80px');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  detailX.position(0, windowHeight + 149);
}

function draw() {
  background('#F25C00');
  directionalLight(255, 99, 204, -1, -1, -1);
  ambientLight(10, 200, 150);
  // Algorithm concept is referenced from UW-Madison professor Meg Mitchell's repel and
  // attract example from ART 107 course.
  for (let i = 30; i < width; i = i + 30) {
    for (let j = 30; j < height; j = j + 30) {
      push();
      translate(i-width/2, j-height/2);
      //find slope, then rotate
      let slope = (j - mouseY) / (i - mouseX);
      slope = slope + 1;
      rotate(slope);
      rotateX(0.5);
      rotateY(0.5);
      fill(255,0,255);
      // used torus shape as the backround shape for repel and attract
      torus(12, 10, detailX.value(),8);
      pop();
    }
  }
  // I created the 3D model on display using the Rhino 3D Modelling Software
  scale(1.56); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.024);
  rotateY(frameCount * 0.11);
  model(skates);
  normalMaterial();
}