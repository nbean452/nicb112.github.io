var vid =  document.getElementById("video");
var vidContainer = document.getElementById("video-container");

function playVideo() {
    if(vid.paused){
        vidContainer.style.zIndex="300";
        vid.play();
        vid.currentTime=0;
    }else {
        vid.pause();
    }
  }