window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Timer

    function checkZero(int) {
        if (int <= 0) {
            int = '00';
        } else if (int < 10) {
            int = '0' + int;
        } else {
            int = int;
        }
        return int;
    }

    let date = new Date(),
        deadline = checkZero(date.getFullYear()) + '-' + checkZero(date.getMonth() + 1) + '-' + checkZero(date.getDate() + 1);

    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total' : t,
            'hours' : checkZero(hours),
            'minutes' : checkZero(minutes),
            'seconds' : checkZero(seconds)
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaning(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total < 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    createTabs('.info-header-tab', '.info-header', '.info-tabcontent');

    function createTabs(tabButtonsList, tabButtonsBox, tabsList) {
        let tab = document.querySelectorAll(tabButtonsList),
        info = document.querySelector(tabButtonsBox),
        tabContent = document.querySelectorAll(tabsList);

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    }
});