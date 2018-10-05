let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
let expenceItem;
let expenceCost;

appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

function moneyIn() {
    expenceItem = prompt("Введите обязательную статью расходов в этом месяце");
    expenceCost = +prompt("Во сколько это обойдется?");
}

for (let i = 0; i < 2; i++ ) {
    moneyIn();
    if ((typeof(expenceItem === 'string')) && (typeof(expenceCost != null)) && 
        (typeof(expenceItem != null)) && expenceItem != '' && 
        expenceCost != '' && expenceItem.length < 50) {
        console.log('Done!');
        appData.expences[expenceItem] = expenceCost; 
    } else {
        alert('Проверьте вводимые данные');
        moneyIn();
    }
    appData.budget -= expenceCost;
}

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert("Ваш бюджет на " + appData.timeData + " соствляет: " + 
    appData.budget/30 + " с учетом расходов в текущем месяце.");

let cash = appData.moneyPerDay;
if(cash < 100) {
    console.log('Минимальный уровень дохода');
} else if (cash > 100 && cash < 2000) {
    console.log('Средний уровень достатка');
} else if (cash > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Что-то пошло не так');
}

let num = 50;

/* if (num < 49) {
    console.log('False!');
} else if (num > 100) {
    console.log('Too much!');
} else {
    console.log('True!');
}

(num == 50) ? console.log('True!') : console.log('False!');

switch (num) {
    case num < 49:
        console.log('False');
        break;
    case num > 100:
        console.log('Too much');
        break;
    case num > 80:
        console.log('Much');
        break;
    case 50:
    console.log('True');
    break;
    default:
    console.log('Something gone wrong');
        break;
}

while (num < 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
} */