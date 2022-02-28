var splashAnimation = document.querySelector('#splash-animation');
var splash = document.querySelector('.splash');

//when splash animation ends, calls another function to hide the splash animation
splashAnimation.addEventListener("animationend", () => {
    setTimeout(fadeOutSplash, 2000);
});

function fadeOutSplash(){
    splash.classList.add('display-none');
}