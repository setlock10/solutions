// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//
// function anagrams(stringA, stringB)

//     cleanA<-stringA   clean the strings - remove spaces and puncuation, make lowercase
//     cleanB<-stringB

//     tallyA<-{}  initialize as empty objects
//     tallyB<-{}

//     Calculate the tally for each string

//     compare each key value pair in both objects
//        return true if all are true
//        return false if any is false

   


function anagrams(stringA, stringB) {

    
    if (clean(stringA)!==clean(stringA))
        return false;

      return true;

}

function clean (string){
    return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
