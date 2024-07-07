const reverseString = function(inputString) {
    let inputArray = [];
    let inputLength = inputString.length;
    inputLength = inputLength - 1;
    for (let i = inputLength;i > -1; i--) {
        inputArray.push(inputString.charAt(i));
    }
    let reverse = "";
    for (let j = 0; j < inputString.length; j++) {
        reverse = reverse + inputArray[j];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
