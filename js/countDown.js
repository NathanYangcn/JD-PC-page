/**
 * Created by Yang on 2017/8/24.
 */
var clockHours = document.querySelector('#seckill .hours');
var clockMinutes = document.querySelector('#seckill .minutes');
var clockSeconds = document.querySelector('#seckill .seconds');

var clockTimer = setInterval(function () {
    countdown(Date.now(), "2017-08-31T15:35:00");
}, 1000);

function countdown(startLine, endLine) {
    var restTime = Date.parse(endLine) - startLine; // 差值
    var clock = formatTime(restTime); // 毫秒数换算
    if (restTime <= 0) {
        clearInterval(clockTimer);
    }
    renderTime(clock); // 渲染时间
}

function formatTime (sec) {
    var secondsTotal = Math.floor(sec / 1000);
    var seconds = secondsTotal % 60 + '';
    var minutesTotal = Math.floor(secondsTotal / 60);
    var minutes = minutesTotal % 60 + '';
    var hoursTotal = Math.floor(minutesTotal / 60);
    var hours = hoursTotal % 60 + '';
    hours = hours.length<2 ? '0'+hours : hours;
    minutes = minutes.length<2 ? '0'+minutes : minutes;
    seconds = seconds.length<2 ? '0'+seconds : seconds;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

function renderTime(time) {
    clockHours.innerText = time.hours;
    clockMinutes.innerText = time.minutes;
    clockSeconds.innerText = time.seconds;
}