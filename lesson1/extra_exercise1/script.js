let num = 33721
let numArr = num.toString().split('')
let sum = parseInt(numArr[0])

for (let i = 1; i < numArr.length; i++) {
    sum = parseInt(numArr[i]) * sum
}

console.log(sum)

sum = sum**3

alert(sum.toString().slice(0, 2))
