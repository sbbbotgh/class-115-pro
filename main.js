function preload(){

}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("loaded");
}

function gotPoses(results){
    Xnose = results[0].pose.nose.x;
    Ynose = results[0].pose.nose.y;
    Xeye = results[0].pose.leftEye.x;
    Yeye = results[0].pose.leftEye.y;
}

function draw(){
    image(video, 0, 0, 350, 350);
}

function take_snapshot(){
    save("peeper.png");
}