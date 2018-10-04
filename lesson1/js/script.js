let money = +prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")

appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++ ) {
    let expenceItem = prompt("Введите обязательную статью расходов в этом месяце")
    let expenceCost = prompt("Во сколько это обойдется?")
    appData.expences[expenceItem] = expenceCost
    appData.budget -= expenceCost
}

console.log(appData)

alert("Ваш бюджет на " + appData.timeData + " соствляет: " + appData.budget/30 + " с учетом расходов в текущем месяце.")

