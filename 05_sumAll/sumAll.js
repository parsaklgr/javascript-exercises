const sumAll = function (num1, num2) {
    let start = num1;
    let finish = num2;
    let sum = 0;
    if (typeof start !== "number" || typeof finish !== "number" || start < 0 || finish < 0) {
        return "ERROR";
    }
    if (num1 > num2) {
        start = num2;
        finish = num1;
    }
    for (let i = start; i <= finish; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
