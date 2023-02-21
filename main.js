song = "";
dance = "";
leftwristX = "";
leftwristY = "";
rightwristX = "";
rightwristY = "";
function preload()
{
    song = loadsound("music.mp3")
    dance = loadsound("music2.mp3")
}

function setup(){
    canvas = createCanvas(400,350)
    canvas.position(500,300)

    video = createCapture(VIDEO);
    video.hide()
    posenet = ml5.posenet(video,modeloaded)

}
function modeloaded (){
    console.log("posenet is initialised")
}
function draw() {
    image(video,0,0,400,350)
    
}

function play()
{
    song.play();
    song.setVolume();
    song.rate();
}
function gotPoses(results){
 
 if(results.length > 0){
    console.log(result);
    leftwristX = results[0].pose.leftwrist.x
    leftwristY = results[0].pose.leftwrist.y
    console.log("leftwristX =" + leftwristX + "leftwristY" + leftwristY )

    rightwristX = results[0].pose.rightwrist.x
    rightwristY = results[0].pose.rightwrist.y
    console.log("rightwristX =" + rightwristX + "rightwristY" + rightwristY )
}
}

