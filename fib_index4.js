// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
// Pseudocode for iterative solution
//
// initialize old <-1
// if n is less than 2 output n
// loop i through n starting at 2
//     old = old + i
// return old
function memoize(fn){
    const cache = {};

    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this,args);
        cache[args] = result;
        return result;

    };
}
function slowFib(n) {
    if (n<2)
    return (n)
else
    return(fib(n-2)+ fib(n-1))
}

 const fib = memoize(slowFib)

module.exports = fib;
