const fibonacci = function(user) {
    let input = Number(user);
    let output = 1;
    let previous = 0;
    if (input >= 1){
        for (let i = 2; i <= input; i++){
            output = output + previous;
            previous = output - previous;
        }
    } else if (input === 0){
        output = 0;
    } else if (input < 0){
        output = "OOPS";
    }
    return output;
};
// Do not edit below this line
module.exports = fibonacci;
