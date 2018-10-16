let clock = document.querySelector('.clock'),
    box = document.querySelector('.clock-box');

function clockView() {
    let time = new Date();
    hour = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    function checkZero(int) {
        if (int < 10) {
            int = '0' + int;
            return int;
        } else {
            return int;
        }
    }

    clock.textContent = (checkZero(hour) + ':' + checkZero(minutes) + ':' + checkZero(seconds));
    clock.style.transform = 'translateX(' + getRandomInt(-50, 50) + '%)';
 
}
setInterval(clockView, 1000);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
