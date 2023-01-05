var vid = document.getElementById("backgroundVideo"); 
vid.play();

function playVid(vid) {
  vid.play(); 
} 
function changeSrc(videoFile,videoContainer){
  var vidSrc = document.getElementById("backgroundVideoSrc");
  videoContainer.pause();
  vidSrc.setAttribute("src",videoFile);
  videoContainer.play();
}
