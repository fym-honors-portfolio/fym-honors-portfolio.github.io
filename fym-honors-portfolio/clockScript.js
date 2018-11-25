
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var years = Math.floor((t / (1000 * 60 * 60 * 365 * 24);
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
    var todayHour = today.getHours();
    var todayMinutes = today.getMinutes();
    var todaySeconds = today.getSeconds();
    var todayYear = today.getFullYear();
    var finalDate = new Date(2019, 8, 25);

function getMonthsLeft(){
    return finalDate.getMonth()-todayMonth;
}

function getDaysLeft(){ 
    return finalDate.getDate() - todayDay;
}
function getYearsLeft(){
    return finalDate.getFullYear() - todayYear;
}


function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var monthsSpan = clock.querySelector('.months');
    var yearsSpan = clock.querySelector('.years');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        monthsSpan.innerHTML = ('0' + t.months).slice(-2);
        yearsSpan.innerHTML = ('0' + t.years).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}




var daysUntil = getDaysLeft();
var monthsUntil = getMonthsLeft();
var yearsUntil = getYearsLeft();

var deadline = new Date(Date.parse(new Date()))

initializeClock('clockdiv', deadline);
