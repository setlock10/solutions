// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    str.split('').unshift(str[str.length-1]);
    str.split('').pop();
    //reverse(str)



    

     return str;
}

module.exports = reverse;
