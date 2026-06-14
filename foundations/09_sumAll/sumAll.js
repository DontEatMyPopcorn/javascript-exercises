const sumAll = function(first,second) {
    let output = 0;
    let lower = 0;
    let higher = 0;

    if (first < 0 || second < 0){
        output = "ERROR";
    } else if (typeof first !== "number" || typeof second !== "number") {
        output = "ERROR";
    } else if (first % 1 !== 0 ||  second % 1 !== 0) {
        output = "ERROR";
    } else {
        if (first <= second){
            lower = first;
            higher = second;
        } else {
            lower = second;
            higher = first;
        }

        for (let i = lower; i <= higher; i++){
            output += i;
        }
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
