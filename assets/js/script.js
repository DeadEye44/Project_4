var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');


var message = 

function countdown() {
    var timeLeft = 180000;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 1000);
}
displayMessage();
consoleLog.countdown = countdown();
