// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const tally= {};
    let max=0;
    let maxKey='';

    for (let c of str){
    //    if (!tally[c]){
    //     tally[c]=1;
    //    }else
    //     tally[c]++;

        tally[c] = tally[c] +1 || 1;


    }

    for (let x in tally){
        if (tally[x]>max){
            max=tally[x];
            maxKey=x;
        }
    }
    return maxKey;

    

    

}

module.exports = maxChar;
