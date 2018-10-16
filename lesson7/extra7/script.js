(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


let box = document.querySelector('.box'),
    ball = document.querySelector('.ball'),
    bigButton = document.querySelector('.bigger'),
    smallButton = document.querySelector('.smaller'),
    alert = document.querySelector('.alert');


bigButton.addEventListener('click', function() {
    if (ball.style.height != '' && parseInt(ball.style.height) > 300) {
        alert.classList.remove('hide');
        alert.textContent = "I am sooo big yet.";
    } else if (ball.style.height != '' && parseInt(ball.style.height) < 100){
        animate(function(timePassed) {
            ball.style.height = timePassed / 5 + 'px';
            ball.style.width = timePassed / 5 + 'px';
        }, 500);
        alert.classList.add('hide');
    } else {
        animate(function(timePassed) {
            ball.style.height = (timePassed + 500) / 5 + 'px';
            ball.style.width = (timePassed + 500) / 5 + 'px';
        }, 2000);
        alert.classList.add('hide');
    }
});

smallButton.addEventListener('click', function() {
    if (ball.style.height != '' && parseInt(ball.style.height) < 20) {
        alert.classList.remove('hide');
        alert.textContent = "I am sooo small yet =)";
    } else if (parseInt(ball.style.height) > 200) {
        animate(function(timePassed) {
                ball.style.height = 500 - timePassed + 'px';
                ball.style.width = 500 - timePassed + 'px';
            }, 400);
            alert.classList.add('hide');
    } else {
        animate(function(timePassed) {
            ball.style.height = 100 - timePassed + 'px';
            ball.style.width = 100 - timePassed + 'px';
        }, 2000);
        alert.classList.add('hide');
    }
});

function animate(draw, duration) {
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;
      if (timePassed > duration)  { 
          timePassed = duration;
      }

      draw(timePassed);
  
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
  
    });
}