let secColumn = document.querySelectorAll('.column')[1];
    menu = document.getElementsByClassName('menu')[0];
    menuItems = document.querySelectorAll('.menu-item');
    title = document.getElementById('title');
    ad = document.querySelector('.adv');
    userText = document.getElementById('prompt');
    thirdMenuItem = menuItems[1];
    fivthMenuItem = document.createElement('li');


title.textContent = 'Мы продаем только подлинную технику Apple';

document.body.style.cssText = 'background: url(img/apple_true.jpg) center no-repeat;';


secColumn.removeChild(ad);
menu.replaceChild(menuItems[2], menuItems[1]);
menu.insertBefore(thirdMenuItem, menuItems[3]);
fivthMenuItem.textContent = 'Пятый пункт';
fivthMenuItem.classList.add('menu-item');
menu.appendChild(fivthMenuItem);



userText.innerHTML = prompt("Как вы относитесь к технике Apple", '');
