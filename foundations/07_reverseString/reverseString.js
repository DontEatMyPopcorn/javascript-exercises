const reverseString = function(input) {
    let output = "";
    let count = input.length;

    for (let i = 0; i < count; i++) {
        let reverseCount = 0 - 1 - i;
        output += input.at(reverseCount);
    }
    return output;



};

// Do not edit below this line
module.exports = reverseString;
