let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

week.forEach(function(element, index) {
    let today = new Date().getDay();
    let day = document.createElement('h2');
    day.innerHTML = element;
    if (index == today) {
        day.style.cssText = "font-style: italic; color: green;";
    } else if ( index == 0 || index == 6) {
        day.style.cssText = "color: red; font-weight: bold;";
    } else {
        day.style.cssText = "color: black;";
    }
    document.body.appendChild(day);
});


let arr = ["34000", "777", "5432", "1108", "228", "1144", "71"]

for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if (item[0] == 3 || item[0] == 7) {
        console.log(arr[i]);
    }
}

/* 
•	Какое будет выведено значение: let x = 5; alert( x++ ); ?

    6

•	Чему равно такое выражение: [ ] + false - null + true ?

    NaN

•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

    2

•	Чему равна сумма [ ] + 1 + 2?

     "12"

•	Что выведет этот код: alert( "1"[0] )?

    1

•	Чему равно 2 && 1 && null && 0 && undefined ?

    null

•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

    No

•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

    3

•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

    Yes

•	Что выведет этот код: alert( +"Infinity" ); ?

    Infinity

•	Верно ли сравнение: "ёжик" > "яблоко"?

    no 

•	Чему равно 0 || "" || 2 || undefined || true || falsе ? 

    2

*/