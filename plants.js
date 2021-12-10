
img = "";
status = "";


function preload() {
img = loadImage('20211210_142817.jpg');
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

function draw() {
    image(img, 0, 0, 640, 420);
}


function gotResults( error, results) {
   
    if(error) {
        console.log(error);
    }
    console.log(results);
}



function back() {
    window.location = "index.html";
}