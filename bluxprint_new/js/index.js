var splashAnimation = document.querySelector('#splash-animation');
var splash = document.querySelector('.splash');

splashAnimation.addEventListener("animationend", () => {
    setTimeout(fadeOutSplash, 2000);
});

function fadeOutSplash(){
    splash.classList.add('display-none');
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// const credit = document.getElementById("photographer");

const releaseDate = '30 Feb 2022';

var curCount = releaseDate;

function countdown() {

    const countDate = new Date(curCount);
    const currentDate = new Date();

    const difference = (countDate - currentDate) / 1000;

    if (difference < 0) {
        daysEl.innerHTML = formatTime(0);
        hoursEl.innerHTML = formatTime(0);
        minutesEl.innerHTML = formatTime(0);
        secondsEl.innerHTML = formatTime(0);
    } else {
        const days = Math.floor(difference / 3600 / 24);
        const hours = Math.floor(difference / 3600) % 24;
        const minutes = Math.floor(difference / 60) % 60;
        const seconds = Math.floor(difference % 3600) % 60;

        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    console.log(days.innerHTML + " days, " + hours.innerHTML + " hours, " + minutes.innerHTML + " minutes, " + seconds.innerHTML + " seconds");

}

function formatTime(time) {
    return time < 10 ? ('0' + time) : time;
}

//intial call
countdown();


//called every 1 second
setInterval(countdown, 1000);