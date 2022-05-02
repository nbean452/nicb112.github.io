const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const header = document.getElementById("header-el");

const credit = document.getElementById("photographer");

const goodFriday = '15 April 2022';
const passover = '18 April 2022';

var curCount = goodFriday;

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

//called when the button is pressed
function switchCount() {
    if (header.innerHTML == "Time till Passover 2022") {
        document.getElementsByClassName("onescreen")[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1616548321627-3c1d17305545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80')";

        header.innerHTML = "Time till Good Friday 2022";
        credit.innerHTML = ' Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/good-friday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
        curCount = goodFriday;
    } else {
        document.getElementsByClassName("onescreen")[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1556815992-e4c14fad039a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
        header.innerHTML = "Time till Passover 2022";
        credit.innerHTML = 'Photo by <a href="https://unsplash.com/@fhlcreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Phil Goodwin </a> on <a href="https://unsplash.com/s/photos/passover?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
        curCount = passover;
    }
    
    

    countdown();
}

function wip() {
    alert("currently Work In Progress! More to Come! Try clicking on my name!");
}

//intial call
countdown();

//called every 1 second
setInterval(countdown, 1000);