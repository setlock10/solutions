//const array = [5, 4, 3, 2, 1, 6, 7, 8]
//const size = 2

function chunk(array, size) {
    let result = []
    let chunk = []

    for (let i = 0; i < array.length;i++) {
    //console.log(v)
    chunk = []
    console.log(i)
    if (i === array.length-1) {
        console.log(chunk.length)
        if (chunk.length != size){
        chunk.push(array[i])
        result.push(chunk)
        }
        else{
        result.push(chunk)
        chunk = []
        chunk.push(array[i])
        }
        
    }
    else {
        if (chunk.length != size)
        chunk.push(array[i])
        else {
        result.push(chunk)
        chunk = []
        chunk.push(array[i])
        }
    }
    }
console.log(result)
return result;
}

module.exports = chunk;