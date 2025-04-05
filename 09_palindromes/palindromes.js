const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");//the last method removes empty spaces an all non-alphanumerical elements so it doesn't falsely generate an error
  
    for (let i = 0; i < string.length / 2; i++) {
        //the string.length is being split into half because we want to check for the palindrome
      if (string[i] !== string[string.length - 1 - i]) {//if the CONTENT of i DOES NOT equal the CONTENT of its mirror part (represented by string.length - 1 - i) then it is no palindrome
        return false;
      }
    }
  
    return true;
  };
// Do not edit below this line
module.exports = palindromes;
