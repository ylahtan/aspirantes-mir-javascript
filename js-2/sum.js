function sum(array) {
    if (array.length === 0) return 0;

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    return suma;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));