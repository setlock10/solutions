// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let a= [];
    a = str.split('').sort().filter((x,i)=> x!=a[i+1]);
    
    let results= a.map((x)=>{
        let count=0; 
        for (let i=0;i<str.length;i++){
            if (str[i]===x) 
                count++;
            }
        return {v:x, count:count};})

    return results.sort((a,b) => (a.count > b.count) ? 1 : -1)[results.length-1].v

            //for (let i=0;i<str.length;i++){if (str[i]==='f') count++;}
    

}

module.exports = maxChar;
