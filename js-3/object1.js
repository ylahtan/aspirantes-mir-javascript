let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["Programar", "squash", "Piano"]
}

console.log(pedro.edad);
pedro.estatura = 1.8;
console.log(pedro.estatura);
delete pedro.activo;

let llaves = Object.keys(pedro);
for (let i = 0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(llave + ": " + pedro[llave]);
}

function saluda(nombre) {
    return (`Hola, me llamo ${nombre}`);
}

console.log(saluda("Pedro Perez"));