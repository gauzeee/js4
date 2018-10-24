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
        deadline = `${checkZero(date.getFullYear())}-${checkZero(date.getMonth() + 1)}-${checkZero(date.getDate() + 1)}`;

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

    // Modal Window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsMore = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        checkAgent('more');
        document.body.style.overflow = 'hidden';
    });  

    close.addEventListener('click', function() {
        setTimeout(function() { 
            overlay.style.display = 'none';
        }, 1000);
        checkAgent('close');
        document.body.style.overflow = '';
    });

    tabsMore.forEach(function(item) {
        item.addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            checkAgent('else');
        });
    });

    function useCssAnimation(item) {
        if (item == 'more') {
            more.classList.add('more-splash');
            overlay.classList.add('fade');
            overlay.classList.remove('fadeout');
        } else if (item == 'close') {
            overlay.classList.add('fadeout');
            overlay.classList.remove('fade');
            more.classList.remove('more-splash');
        } else {
            overlay.classList.add('fade');
            overlay.classList.remove('fadeout');
            this.classList.add('more-splash');
        }
    }

    function useJsAnimation(item) {
        if (item == 'more' || item == 'else') {
            animate(function(timePassed) {
                overlay.style.opacity = timePassed / 1000;
            }, 1000);
        } else {
            animate(function(timePassed) {
                overlay.style.opacity = 1 - (timePassed/1000);  
            }, 1000);
        }
    }

    function animate(draw, duration) {
        var start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          var timePassed = time - start;
      
          if (timePassed > duration) timePassed = duration;
      
          draw(timePassed);
      
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
        });
      }

      function offAnimation() {
          return;
      }

    // Check animation type
    function checkAgent(item) {
        let agent = navigator.userAgent.toLowerCase();
        if ((/trident/gi).test(agent) || (/msie/gi).test(agent) || (/edge/gi).test(agent)) {
            useCssAnimation(item);
        } else if ((/android/gi).test(agent) || (/iphone|ipad/gi).test(agent)) {
            offAnimation();
        } else {
            useJsAnimation(item);
        }
    }

    // Form

    let message = {
        loading: '<img src="img/ajax-loader.gif"></img>',
        success: '<img src="img/handshake.png"></img>',
        failure: 'Что-то пошло не так...'
    };

    let tel1 = document.querySelector('#tel1'),
        tel = document.querySelector('#tel');

    tel1.addEventListener('input', function() {
        this.value = `+${this.value.replace(/\D/g, "")}`;
    });
    tel.addEventListener('input', function() {
        this.value = `+${this.value.replace(/\D/g, "")}`;
    });
    
    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('.contact-form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');


    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve();
                                }
                            } else {
                                reject();
                            }
                        }
                        request.send(data);
                    });
                }
                function clearInput() {
                    for(let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        });
        }

    sendForm(form);
    sendForm(contactForm);

});