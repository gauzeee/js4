let time = new Date();
    month = time.getMonth();
    day = time.getDate();
    hour = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    firstDate = document.getElementById('first-date');
    secondDate = document.getElementById('second-date');
    result = document.getElementById('result');
    btn = document.querySelector('#btn');


function checkZero(int) {
    if (int < 10) {
        int = '0' + int;
        return int;
    } else {
        return int;
    }
}

clock = document.createElement('h2');
clock.innerHTML = checkZero(hour) + ':' + checkZero(minutes) + ':' +
                checkZero(seconds) + ' ' + checkZero(day) + '.' +
                checkZero(month) + '.' + time.getFullYear();
document.body.insertBefore(clock, firstDate);


function today() {
    let week = ['Воскресенье', "Понедельник", 
                "Вторник", "Среда", "Четверг", "Пятница.", "Суббота"];
        dayOfWeek = document.createElement('h2');
    
    dayOfWeek.innerText = week[time.getDay()];
    document.body.insertBefore(dayOfWeek, firstDate);
}
today();



btn.addEventListener('click', function calcDate(){
    let date1 = new Date(firstDate.value);
        date2 = new Date(secondDate.value);
        timeDiff = date2.getTime() - date1.getTime();
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    result.innerText = diffDays; 
});