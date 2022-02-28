var splashAnimation = document.getElementById("splash-animation");
var splash = document.getElementById("splash");

//when splash animation ends, calls another function to hide the splash animation
splashAnimation.addEventListener("animationend", () => {
    console.log("anim ended!");
    
    setTimeout(fadeOutSplash, 2000);
});

function fadeOutSplash(){
    splash.style.zIndex = "-100";
    splash.style.opacity = "0";
}