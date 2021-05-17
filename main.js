
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song="";
function preload(){
  song=loadSound('music.mp3');  
}
function setup(){
    canvas=createCanvas(500, 400);
    canvas.position();
    video=createCapture(VIDEO);
    video.hide(); 
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 500, 400);
}
function d(){
    song.play();
    song.setVolume(1);
    

}
function modelLoaded() {
    console.log('model is loaded model is loaded model is loaded model is loaded mod...');
       
}
function gotPoses(results) {
   if (results.length>0) {
       /* above just says that if your out of the camera or the camera is not there results will not be seen*/
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.leftWrist.x;
rightWristY = results[0].pose.leftWrist.y;
console.log('leftX='+leftWristX+',Y'+leftWristY+'rightX='+rightWristX+',Y'+rightWristY);
   } 
}