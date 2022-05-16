const fibonacci = function (index) {
    if (typeof index === "string") {
        index = parseInt(index);
    }
    if (index < 1) {
        return "OOPS";
    }
    let firstNum = 1;
    let secondNum = 1;
    for (let i = 2; i < index; i++){
        let temp = firstNum;
        firstNum = secondNum;
        secondNum = temp + secondNum;
    }
    return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
