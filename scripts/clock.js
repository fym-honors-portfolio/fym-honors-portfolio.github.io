function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var years = Math.floor((t / 1000  * 60 * 60 * 24 * 12);
    var months = Math.floor((t / (1000 * 60 * 60 * 24 * 30);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'months': months,
        'years': years,
    };
}

    var today = new Date();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    var todayYear = today.getYear();

function getMonthsLeft(){
    alert(Math.abs(8-todayMonth));
    return Math.abs(8 - todayMonth);
}

function getDaysLeft(){ 
    return Math.abs(25 - todayDay);
}
function getYearsLeft(){ 
    return 0;
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var monthsSpan = clock.querySelector('.months');
    var yearsSpan = clock.querySelector('.years');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        monthsSpan.innerHTML = ('0' + t.hours).slice(-2);
        yearsSpan.innerHTML = ('0' + t.minutes).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}




var daysUntil = getDaysLeft();
var monthsUntil = geMonthsLeft();
var yearsUntil = getYearsLeft();

var deadline = new Date(Date.parse(new Date()) + daysUntil * 24 * 60 * 60 * 1000 + monthsUntil * 60 * 60 * 1000 + yearsUntil * 60 * 1000 + secondsUntil*1000);
initializeClock('clockdiv', deadline);
alert("Hello\nHow are you?");