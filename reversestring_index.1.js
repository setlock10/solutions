// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
    let newstr = []
    for (let i=str.length;i>0;i--){
        newstr[str.length-i]=str[i-1]
    }
    
    return newstr.join('');


    
}

module.exports = reverse;
