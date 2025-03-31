const sumAll = function(num1, num2) {

//You need variables for the sum, the beginning of the factorial and the end
let sum = 0


let start = 0
let end = 0

//How to determine which number to start with
if (num1 > num2){
    start = num2;
    end = num1;
}

else if (num1 < num2){
    start = num1;
    end = num2;
}
//doesnt work for negative numbers
if (num1 < 0 || num2 < 0){
    return "ERROR"
}
//or non-Integers (which inclues everything but integers)
else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return "ERROR"
}



for (let i = start; i <= end; i++){
    sum += i;
}
return sum;

}










// Do not edit below this line
module.exports = sumAll;
