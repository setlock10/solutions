// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//
// Pseudocode
//
// create empty array results
// intitialize counter at 1
// while startColumn <= endColumn and startRow<= endRow
//     loop i from startColumn to endColumn
//         results[start-row][i]<-counter
//         counter++
//     startRow ++
//     loop i from startRow to endRow
//         results[i][endColumn]
//         counter++
//     endRow--




function matrix(n) {
    //create the empty matrix
    const spiral=[]
    for (let i=0;i<n;i++){
        let row = new Array(n)
        spiral.push(row); 
    }

    let counter=1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while ((startColumn<=endColumn)&&(startRow<=endRow)){
        //top of spiral
        for (let i=startColumn;i<=endColumn;i++){
            spiral[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        //right side
        for (let i=startRow;i<=endRow;i++){
            spiral[i][endColumn]=counter;
            counter++;
        }
        endColumn--;

        //bottom
        for (let i=endColumn;i>=startColumn;i--){
            spiral[endRow][i]=counter;
            counter++;
        }
        endRow--;

        //left side
        
        for(let i=endRow;i>=startRow;i--){
            spiral[i][startColumn]=counter;
            counter++;
        }
        startColumn++;

    }
        return spiral;
    
}

module.exports = matrix;
