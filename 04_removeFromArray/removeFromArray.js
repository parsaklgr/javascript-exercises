const removeFromArray = function(arr, ...itemsToBeRemoved) {
    const result = [...arr];
    for (let i = 0; i < itemsToBeRemoved.length; i++) {
        for (let j = 0; j < result.length; j++){
            if (result[j] === itemsToBeRemoved[i]) {
                result.splice(j, 1);
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
