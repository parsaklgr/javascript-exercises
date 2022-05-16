const palindromes = function (str) {
    const regex = /\w/;
    let stringArr = str.toLowerCase().split("").filter(char => regex.test(char));
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== stringArr[stringArr.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
