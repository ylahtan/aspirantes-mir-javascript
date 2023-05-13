function join(array) {
    if (array.length === " ") return " ";

    let string = " ";
    for (let i = 0; i < array.length; i++) {
        string += array[i] + " ";
    }
    return string;
}

console.log(join(["Yo", "soy", "Programadora"]));
console.log(join([" "]));
console.log(join(["Lo", "LOGRE"]));