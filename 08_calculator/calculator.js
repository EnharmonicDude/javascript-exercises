const add = function(num1, num2) {

  let result = (num1 + num2);
	
  return result;
};

const subtract = function(num1, num2) {
	
  let result = (num1 - num2);
	
  return result;

};

const sum = function(arr) {

  let sum = 0
  for (let i = 0; i < arr.length; i++){

    sum += arr[i]; //the sum is the addition of all instances of arr[i] which, of course, increase with each loop

  }

	return sum;
};

const multiply = function() {

  let result = (num1 * num2);
	
  return result;

};

const power = function() {
	
};

const factorial = function() {
	
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
