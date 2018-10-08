let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);
str = str.replace(/-/g, ' ');
console.log(str);
str = str.slice(-6).replace('и', 'о').replace('м', 'о');
alert(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
    arrSum = 0;

arr.forEach(function(item) {
    if (typeof(item) == 'number') {
        let toSum = Math.pow(item, 3);
        arrSum += toSum;
    }
});

console.log(Math.sqrt(arrSum));

function anarchy(elem) {
    if (typeof(elem) != 'string') {
        alert('This is not a string!');
    } else {
        elem = elem.trim();
        if (elem.length > 50) {
           elem = elem.substring(0, 50) + '...';
        }
    }
    return elem;
}