const fibonacci = function(n) {

/*Receive an integer as a parameter. This integer represents the position in the fibonacci sequence. (Fn = Fn-1 + Fn-2 for n>1) or in normal words: The number n in the Sequence is the sum of the preceding two numbers as long as n is bigger than one. Example: F8 = 21 because F7 = 13 and F6 = 8. Return this target number */

n = parseInt(n); //in case someone types "1" instead of 1

if (n < 0){//fibonacci doesn't work with negatives

    return "OOPS";
}

let fib = [0, 1]//we need at least two numbers in the sequence to start, so we inizialize with the first two starting numbers. If we had a tribonacci sequence, it would be 3 etc.
for (let i = 2; i <= n; i++){//so our i = 2 because we need 2 numbers. Then we just iterate up to our chosen fibonacci position.

    fib[i] = fib[i-1] + fib[i-2];

}

return fib[n];
}


// Do not edit below this line
module.exports = fibonacci;
