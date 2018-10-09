let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
    chooseExpences: function(){
        for (let i = 0; i < 2; i++ ) {
            let expenceItem = prompt("Введите обязательную статью расходов в этом месяце");
                expenceCost = +prompt("Во сколько это обойдется?");
            if ((typeof(expenceItem === 'string')) && (typeof(expenceCost != null)) && 
                (typeof(expenceItem != null)) && expenceItem != '' && 
                expenceCost != '' && expenceItem.length < 50) {
                console.log('Done!');
                appData.expences[expenceItem] = expenceCost; 
            } else {
                i = i - 1;
            }
            appData.budget -= expenceCost;
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ваш бюджет на " + appData.timeData + " соствляет: " +  
            appData.moneyPerDay + " с учетом расходов в текущем месяце.");
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++ ) {
            let optExpenceItem = prompt("Статья необязательных расходов?");
            if ((typeof(optExpenceItem === 'string')) &&
                (typeof(optExpenceItem != null)) && optExpenceItem != '' && 
                optExpenceItem.length < 50) {
                appData.optionalExpences[i] = optExpenceItem; 
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        if ((typeof(items === 'string')) && items != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        } else {
            appData.chooseIncome();
        }
     
        let incomes = '';
        appData.income.forEach(function(item, i) {
            incomes = incomes + ((i+1) + ") " + item + "\n");
        });
        
        alert("Способы дополнительного заработка:\n" + incomes);
    }
};

function whatWeHave() {
    let data = '';
for (let key in appData) {
    data = data + (key + ": " + appData[key] + "\n");
}
console.log("Наша программа включает в себя данные: \n" + data);
}