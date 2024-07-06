const repeatString = function(term,quantity) {
    if (quantity < 0) {
        return "ERROR";
    }
    else {
        let output;
        output = "";
        for (let i = 0; i < quantity; i++) {
            output = output + term;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
