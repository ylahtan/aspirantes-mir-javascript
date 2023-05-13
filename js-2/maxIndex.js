function maxIndex(array) {
    if (array.length === 0) return -1;

    let max = array[0];
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));