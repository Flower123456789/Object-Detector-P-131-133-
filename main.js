
img = "";
status = "";


function preload() {
img = loadImage('');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}


function modelLoaded() {
    console.log("Model Is Loaded!");
    status = true;
    objectDetector.detect( img, gotResults);
}




function gotResults( error, results) {
   
    if(error) {
        console.log(error);
    }
    console.log(results);
}