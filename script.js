let milisec = document.getElementById("msec");
let seconds = document.getElementById("secs");
let minutes = document.getElementById("mins");
let hours = document.getElementById("hours");
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 00;
let secs = 00;
let mins = 00;
let hour = 00;

let timerid = null;

startbtn.addEventListener('click', function() {
    if (timerid !== null) {
        clearInterval(timerid);
    }


    timerid = setInterval(starttimer, 10);

});

stopbtn.addEventListener('click', function() {
    console.log("hiii")
    clearInterval(timerid);


});

resetbtn.addEventListener('click', function() {
    console.log("hiii")

    clearInterval(timerid);
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milisec.innerHTML = "00";
    hour = mins = msec = secs = 00;



});


function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
            if (mins == 60) {
                mins = 0;
                hour++;
            }
        }
    }
    // let msecString = msec < 10 ? '0${msec}' : msec;
    // let secsString = secs < 10 ? '0${secs}' : secs;
    // let minsString = mins < 10 ? '0${mins}' : mins;
    if (hour < 10) {
        hours.innerHTML = "0" + hour;
    } else {
        hours.innerHTML = hour;
    }

    if (hour < 10) {
        minutes.innerHTML = "0" + mins;
    } else {
        minutes.innerHTML = mins;

    }
    if (hour < 10) {
        seconds.innerHTML = "0" + secs;
    } else {
        seconds.innerHTML = secs;
    }

    milisec.innerHTML = msec;
}