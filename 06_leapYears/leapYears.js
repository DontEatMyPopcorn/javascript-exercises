const leapYears = function(year) {
    let output = true;
    let mod4 = year%4;
    let mod100 = year%100;
    let mod400 = year%400;

    if (mod4 !== 0) {
        output = false;
    }
    if (mod100 === 0 & mod400 !== 0) {
        output = false;
    }
    return output;

};

// Do not edit below this line
module.exports = leapYears;
