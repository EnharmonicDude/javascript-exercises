const reverseString = function(str) {

    //1. create a variable for the split string and equate it to the built-in method of .split, which splits a string into its compartments
    let splitString = str.split("");

    //2. create a variable for an array that equals the contents of the split string + the .reverse method
    let reverseArray = splitString.reverse("");
    
    //3. create a variable for a joined array that joins all the reverse compartments of the string
    let joinedArray = reverseArray.join("");


    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
