let money = +prompt("Ваш бюджет на месяц?")
let shopName = prompt("Название вашего магазина?")

mainList = {
    budget: money,
    name: shopName,
    shopGoods: [],
    employers: {},
    open: false
}

for (let i = 0; i < 3; i++ ) {
    let item = prompt("Какой тип товаров будем продавать?")
    mainList.shopGoods.push(item)
}

console.log(mainList)
alert(mainList.budget)

