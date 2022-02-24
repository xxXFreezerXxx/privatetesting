function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL );
}
var easing = BezierEasing(0, 0, 1, 0.5);
// easing allows to project x in [0.0,1.0] range onto the bezier-curve defined by the 4 points (see schema below).
console.log(easing(0.0)); // 0.0
console.log(easing(0.5)); // 0.3125
console.log(easing(1.0));
let i=0;
function draw() {
  if (i<1){
    i+=0.01;
  }
  circle(easing(i)*100,100,100);
}
