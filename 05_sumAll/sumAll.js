const sumAll = function(in1, in2) {
    if (typeof(in1)!== "number") {
        return "ERROR"
    }
    if (typeof(in2)!== "number") {
        return "ERROR"
    }
    if (in1 < 0) {
        return "ERROR"
    }
    if (in2 < 0) {
        return "ERROR"
    }
    
    let output = 0;
    let bigger;
    let smaller;
    if (in1 > in2) {
        bigger = in1;
        smaller = in2;
    }
    else if (in1 < in2) {
        smaller = in1;
        bigger = in2;
    }
    //else if in1 == in2

    for (let i = smaller; i <= bigger; i++){
        output += i;
    }

    return output;

};

// Do not edit below this line
module.exports = sumAll;
