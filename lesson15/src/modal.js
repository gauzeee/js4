export function modal() {
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
}