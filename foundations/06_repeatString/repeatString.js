const repeatString = function(input, count) {
    let arr = [];
    
    for (let i = 0; i < count; i++) {
        arr.push(input);
    }

    let output = "";
    if (count >= 1) {
        output = arr.reduce((accumulator, currentItem) => accumulator += input);
    } else if (count === 0) {
        output = "";
    } else {
        output = "ERROR";
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
