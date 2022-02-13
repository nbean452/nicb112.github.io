var mainVideo = $('video');

if ($(window).width() < 800) {
    //   document.getElementById('video').classList.add('behind');
    //   splash.classList.add('display-none')
    mainVideo.append("<source type='video/mp4' src='video/Logo Animation Portrait.mp4' />");
    // document.getElementsByClassName('splash')[0].style.display = "none";
    // document.getElementsByClassName('splash').style.zIndex = "-10";

} else {
    // document.getElementsByClassName('splash')[0].style.zIndex = "200";
    mainVideo.append("<source type='video/mp4' src='video/Logo Animation Landscape.mp4' />");
}

// $('video').get(0).play();

var video = document.querySelector('.splash-animation');
var splash = document.querySelector('.splash');

video.onended = function (e) {
    setTimeout(splash.classList.add('display-none'), 1500);
};

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