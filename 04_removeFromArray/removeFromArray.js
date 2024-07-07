const removeFromArray = function(inputArray, in1, in2, in3, in4) {
    let arrayLength;
    arrayLength = inputArray.length;
    for (let i = arrayLength; i > -1; i--) {
        if (inputArray[i] === in1) {
            inputArray.splice(i,1);
        }
    }

    arrayLength = inputArray.length;
    for (let i = arrayLength; i > -1; i--) {
        if (inputArray[i] === in2) {
            inputArray.splice(i,1);
        }
    }

    arrayLength = inputArray.length;
    for (let i = arrayLength; i > -1; i--) {
        if (inputArray[i] === in3) {
            inputArray.splice(i,1);
        }
    }

    arrayLength = inputArray.length;
    for (let i = arrayLength; i > -1; i--) {
        if (inputArray[i] === in4) {
            inputArray.splice(i,1);
        }
    }
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
