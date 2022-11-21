// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    const result=[]

    for (let x of str.split(' ')){
        //console.log(x)
        let temp=x.split('')
        temp[0]=x[0].toUpperCase()
       //console.log(temp.join(''))
        result.push(temp.join(''))
    }
    return result.join(' ')

}

module.exports = capitalize;
