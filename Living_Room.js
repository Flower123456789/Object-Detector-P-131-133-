
img = "";
status = "";
objects = [];


function preload() {
img = loadImage('20211210_142613.jpg');
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

    image( img, 0, 0, 640, 420);

    if(status != "") {

        for( i = 0; i < objects.length; i++ ) {

            document.getElementById("status").innerHTML = " Status: Object Detected";
            
            fill("#03f4fc");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + "%", objects[i].x ,objects[i].y );
            noFill();
            stroke("royalblue");
            rect(objects[i].x ,objects[i].y ,objects[i].width ,objects[i].height);
        }
    }
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