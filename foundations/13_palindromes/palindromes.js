const palindromes = function (phrase) {
    let temp = phrase.replace(/[^a-zA-Z0-9]/g, ''); 
    let input = temp.toLowerCase();
    let answer = true;

    for (let i = 0; i <= input.length-1; i++){
        if (input[i] !== input[input.length-i-1]){
            answer = false;
        }
        console.log("i", i);
        console.log(input[i], input[input.length-i-1]);
        console.log(answer);
    }


    return answer;
};
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
