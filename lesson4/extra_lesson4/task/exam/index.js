function getFriendlyNumbers(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number' ||
        start > end || start < 0 || end < 0) {
            return false; 
    } else {
        let pare = [];
        for (let i = start; i <= end; ++i) {
            let count = countDividers(i);
            if (countDividers(count) == i && i < count) {
                pare.push([i, count]);
            }
        }
        return pare;
    }
}

function countDividers(int) {
    let result = 1;
    for(let i = 2; (i*i) < int; ++i) {
        if(int%i == 0) {
            result += i;
            if ( int/i != i) {
                result += int/i;
            }
        }
    }
    return result;
}


module.exports = {
   firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
};


