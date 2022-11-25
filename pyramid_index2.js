// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {


    for (let i=0;i<n;i++){
        let result='';
        for(let j=0;j<(2*n-1);j++){
            if (i==n-1)
                result+='#';
            else {            
                if ((j>=n-i-1)&&(j<=n-1+i))
                    result+='#';
                 else
                    result+=' ';
            }

        }
        console.log(result);

    }



}

module.exports = pyramid;
