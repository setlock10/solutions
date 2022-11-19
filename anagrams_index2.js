// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



function anagrams(stringA, stringB) {

    const cleanA=stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort();
    const cleanB=stringB.replace(/[\W]/g,'').toLowerCase().split('').sort();
    
    const tallyA= {};
    const tallyB= {};

    for (let c of cleanA)
        tallyA[c] = tallyA[c] +1 || 1;

    for (let c of cleanB)
        tallyB[c] = tallyB[c] +1 || 1;

    if (Object.keys(tallyA).length!=Object.keys(tallyB).length)
        return false;

    for (let i=0;i<Object.keys(tallyA).length;i++){
        if ((Object.keys(tallyA)[i]!=Object.keys(tallyB)[i]) ||
        (Object.values(tallyA)[i]!=Object.values(tallyB)[i]))
            return false;
    }
    return true;



}

module.exports = anagrams;

