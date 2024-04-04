leftwrist = 0;
rightwrist = 0;
difference = 0;
function setup(){
canvas = createCanvas(700,450);
canvas.position(650,110);
video = createCapture(VIDEO);
video.size(500,500);
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}
function modelloaded(){
console.log(modelloaded);
}
function gotposes(results){
if (results.length > 0){
    console.log(results);
    leftwrist = results[0].pose.leftWrist.x;
    rightwrist = results[0].pose.rightWrist.x;
    difference = floor(leftwrist - rightwrist);
    console.log("left wrist x = " + leftwrist);
    console.log("right wrist x = " + rightwrist);
    console.log("difference = " + difference);
}
}
function draw() {
    canvas.background(190,210,180);
    fill("#EEF4F2");
    textSize(difference);
    text("Evergreen Academy", 50, 225);
}