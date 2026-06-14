const removeFromArray = function(input, ...removals) {

    let output = input;
    for (let i = 1; i < arguments.length; i++){
        output = output.filter(num => num !== arguments[i]);

    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
