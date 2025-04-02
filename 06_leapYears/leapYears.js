const leapYears = function(year) {


    //1. Receive a parameter which reflects a year number
    //2. if the input is not an integer: return false
    if (!Number.isInteger(year)){
        return false;
    }
    //3. if the input is not divisible by 4, return false
    else if (year % 4 !== 0){
        return false;
    }
    else if (year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0){
        return false;
    }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        return true;
    }
    }
;

// Do not edit below this line
module.exports = leapYears;
