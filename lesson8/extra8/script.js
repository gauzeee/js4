let first = document.querySelector('.first'),
    firstBtn = document.querySelector('.first-btn'),
    second = document.querySelector('.second'),
    secondBtn = document.querySelector('.second-btn'),
    windowHeight = parseInt(getComputedStyle(first).height);


firstBtn.addEventListener('click', function() {
    doScrolling(windowHeight, 700);
});

secondBtn.addEventListener('click', function() {
    doScrolling(0, 700);
});

function doScrolling(elementY, duration) { 
    let startingY = window.pageYOffset,
        diff = elementY - startingY;
    let start;
  
    window.requestAnimationFrame(function step(timestamp) {
      if (!start)  { 
          start = timestamp;
      }
      let time = timestamp - start,
          percent = Math.min(time / duration, 1);
      
      window.scrollTo(0, startingY + diff * percent);
      
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }

