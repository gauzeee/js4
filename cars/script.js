
let wrap = document.querySelector('.box'),
    loader = document.createElement('div'),
    german = document.querySelector('#german'),
    italian = document.querySelector('#italian'),
    france = document.querySelector('#france'),
    checkboxes = document.querySelectorAll('input');


function getRequest(category) {
    let request = new XMLHttpRequest();
    request.open('GET', 'cars.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState < 4) {
            loader.innerHTML = '<img src="ajax-loader.gif">';
            wrap.appendChild(loader);
        } else if (request.readyState === 4 && request.status == 200) {
            let cars = JSON.parse(request.response)['cars'];
            wrap.removeChild(loader);  
            if (category == 'all') {
                for(let i=0; i < cars.length; i++) {
                    createCard(cars, i);
                }
            } else {
                for(let i=0; i < cars.length; i++) {
                    if (cars[i]['category'] == category) {
                        createCard(cars, i);
                    }
                }
            }
        } else {
            console.log('Error');
        }
    });
}

getRequest('all');


checkboxes.forEach(function(item) {
    item.addEventListener('change', function() {
         if (german.checked && france.checked && italian.checked) {
            wrap.innerHTML = '';
            getRequest('germany');
            getRequest('france');
            getRequest('italian');
         } else if (german.checked && italian.checked) {
            wrap.innerHTML = '';
            getRequest('germany');
            getRequest('italian');
        } else if (german.checked && france.checked) {
            wrap.innerHTML = '';
            getRequest('germany');
            getRequest('france');
        } else if (italian.checked && france.checked) {
            wrap.innerHTML = '';
            getRequest('italian');
            getRequest('france');
        } else if (italian.checked) {
            wrap.innerHTML = '';
            getRequest('italian');
        } else if (france.checked) {
            wrap.innerHTML = '';
            getRequest('france');
        } else if (german.checked) {
            wrap.innerHTML = '';
            getRequest('germany');
        } else {
            wrap.innerHTML = '';
            getRequest('all');
        }
    });
});

   
function createCard(cars, i) {
    let carBlock = document.createElement('div');
    title = document.createElement('h3'),
    img = document.createElement('img'),
    desc = document.createElement('p'),
    price = document.createElement('h3');
    
    title.innerHTML = cars[i]['name'];
    img.src = cars[i]['img'];
    img.style.cssText = 'width: 250px; height: 150px;';
    carBlock.classList.add('car');
    desc.innerHTML = cars[i]['description'];
    price.innerHTML = `Total: ${cars[i]['price']} $`;
    wrap.appendChild(carBlock);
    carBlock.appendChild(title);
    carBlock.appendChild(img);
    carBlock.appendChild(desc);
    carBlock.appendChild(price);
}
