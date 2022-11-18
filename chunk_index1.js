// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//
// Pseudocode
//
// function chunk(array, size)
//  result=[]
//  numChunks<-(array.length/size).toInteger // 
//
//  for i each numChunks (full chunks)
//     tempArray=[]
//     for j each size 
//        tempArray.push<-array[(i*size)+j]
//     result.push<-tempArray
//     tempArray=[]
//  for k each array.length%size
//     tempArray.push<-array[(numChunks*size)+k]
//  result.push<-tempArray
//
//  return result




function chunk(array, size) {
    const numChunks = parseInt(array.length / size)
    let result = []
    let tempArray = []
    for (let i = 0; i < numChunks; i++) {
      tempArray = []
      for (let j = 0; j < size; j++) {
        tempArray.push(array[(i * size) + j])
      }
      result.push(tempArray)
    }
    tempArray = []
    if (array.length % size != 0) {
      for (let k = 0; k < array.length % size; k++)
        tempArray.push(array[(numChunks * size) + k])
  
      result.push(tempArray)
    }
  
    return result;
  }
  module.exports = chunk;
 // console.log(chunk([5, 4, 3, 2, 1, 6, 7, 8], 2))
  