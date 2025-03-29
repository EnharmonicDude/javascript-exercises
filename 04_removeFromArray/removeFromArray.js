const removeFromArray = function(array, ...args) {//my new Array + random other arguments

const newArray = []//1. create a new variable for my array

array.forEach((item) => {//2. check each item in the array

    if (!args.includes(item)){//3. if the item is NOT part of the function arguments
        newArray.push(item);//4. add the item to the existing newArray
    }
}
)

return newArray; //5. and finally return the value of the updated newArray


};

// Do not edit below this line
module.exports = removeFromArray;
