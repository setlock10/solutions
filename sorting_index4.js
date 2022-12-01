// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for (let i = 0;i < arr.length;i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            let a = arr[j];
            let b = arr[j+1]
            if (a > b){
                arr[j]=b;
                arr[j+1]=a;
            }
        }
    }
    return arr;



}

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++){
        let indexOfMin = i;
        for( let j = i +1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }

        }
        if (i !== indexOfMin){
            let a = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin]= a;
        }
    }

    return arr;

}

function mergeSort(arr) {
    if (arr.length<=1){
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge (mergeSort(left), mergeSort(right));




}

function merge(left, right) {

    const results = [];

    while(left.length && right.length){
        if(left[0]<right[0]){
            results.push(left.shift());
        }
        else{
            results.push(right.shift());
        }
    }

    if (left.length){
        for (let a of left){
            results.push(a);
        }
    }

    if (right.length > 0){
        for (let a of right){
            results.push(a);
        }
    }
    return results;

    //return [...results, ...left, ...right];


}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
