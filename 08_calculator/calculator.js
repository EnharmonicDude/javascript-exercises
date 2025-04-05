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

const multiply = function(arr) {

  let product = 1
  for (let i = 0; i < arr.length; i++){

    product *= arr[i]; //the sum is the addition of all instances of arr[i] which, of course, increase with each loop

  }
  return product;

};

const power = function(num1, num2) {

  //Take number 1 and multiply it by itself the number of times of number 2

  let result = (num1 ** num2);

  return result;
	
};

const factorial = function(num) {
  if (num < 0) {
    return "ERROR"; // Or some other error indicator
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  let product = 1;//because if it is = 0 you get 0
  for (let i = 1; i <= num; i++) {//start at 1 and increase every loop until you hit num.
    product *= i; //first run (5): product = 1 * 1; second: product = 1 * 2; third: product = 2 * 3 etc
  }
  return product;
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
