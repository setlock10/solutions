// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    if(n<0)
        return (parseInt(Array.from(String(Math.abs(n))).reverse().join('')))*(-1);
    else
        return parseInt(Array.from(String(n)).reverse().join(''));
}

module.exports = reverseInt;
