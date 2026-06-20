const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(input) {
	return input.reduce((accumulator, input) => accumulator + input,
  0,
);
};

const multiply = function(input) {
	return input.reduce((accumulator, input) => accumulator * input,
  1,
);
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(input) {
	let output = input;
  let j = input - 1;

  if (input>0){
    for (let i = j; i >1; i--){
      output = output * i;
    }
  } else {
    output = 1;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
