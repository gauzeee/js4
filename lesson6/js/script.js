let startButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesInputs = document.getElementsByClassName('expenses-item'),
    expensesItemButton = document.getElementsByTagName('button')[0],
    optionalExpensesButton = document.getElementsByTagName('button')[1],
    countBudgetButton = document.getElementsByTagName('button')[2],
    optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),
    incomeInput = document.querySelector('.choose-income'),
    savingsCheckbox = document.querySelector('#savings'),
    chooseSumInput = document.querySelector('.choose-sum'),
    choosePercentInput = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money;
let time;

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: [],
    income: [],
    savings: false
};


startButton.addEventListener('click', function() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    expensesItemButton.removeAttribute('disabled');
    optionalExpensesButton.removeAttribute('disabled');
    countBudgetButton.removeAttribute('disabled');
});

if (appData.budget == undefined) {
    expensesItemButton.setAttribute('disabled', 'disabled');
    optionalExpensesButton.setAttribute('disabled', 'disabled');
    countBudgetButton.setAttribute('disabled', 'disabled');
}

expensesItemButton.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesInputs.length; i++ ) {
        let expenceItem = expensesInputs[i].value,
            expenceCost = expensesInputs[++i].value;
        if ((typeof(expenceItem === 'string')) && (typeof(expenceCost != null)) && 
            (typeof(expenceItem != null)) && expenceItem != '' && 
            expenceCost != '' && expenceItem.length < 50) {
            appData.expences[expenceItem] = expenceCost; 
            sum += +expenceCost;
        } else {
            i = i - 1;
        }
        appData.budget -= expenceCost;
    }
    expensesValue.textContent = sum;
});

optionalExpensesInputs.forEach(function(item) {
    item.addEventListener('input', function() {
        if (appData.optionalExpences.length >= 3) {
            appData.optionalExpences = [];
            optionalExpensesValue.textContent = '';
        }
        if (!/^[а-яА-я-]*$/.test(item.value)) {
            item.value = '';
            alert('Вводите слова на русском языке. Спасибо!');
        }
    });
});

for (let i = 0; i < expensesInputs.length; i++) {
    expensesInputs[++i].addEventListener('input', function() {
        if (!/^\d+/.test(this.value)) {
            this.value = '';
            alert('Вводите цифры. Спасибо!');
        }
    });
}

optionalExpensesButton.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesInputs.length; i++ ) {
        let optExpenceItem = optionalExpensesInputs[i].value;
            appData.optionalExpences[i] = optExpenceItem; 
            optionalExpensesValue.textContent += appData.optionalExpences[i] + ' ';
    }
});

countBudgetButton.addEventListener('click', function()  {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        let cash = appData.moneyPerDay;
        if(cash < 100) {
            levelValue.textContent = 'Минимальный уровень дохода';
        } else if (cash > 100 && cash < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (cash > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Что-то пошло не так';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

incomeInput.addEventListener('input', function() {
    incomeValue.textContent = incomeInput.value;
    let items = incomeInput.value;
        if ((typeof(items === 'string')) && items != null && items != '') {
            appData.income = items.split(', ');
        } 
});

savingsCheckbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSumInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSumInput.value,
            percent = +choosePercentInput.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercentInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSumInput.value,
        percent = +choosePercentInput.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

function whatWeHave() {
    let data = '';
    for (let key in appData) {
        data = data + (key + ": " + appData[key] + "\n");
    }
    console.log("Наша программа включает в себя данные: \n" + data);
}

