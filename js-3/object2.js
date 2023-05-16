let persona = {
    nombre: "Desiree Delgado",
    edad: 36,
    ciudad: "Bogotá",
    profesion: "Programador",
}

console.log(persona);

function presentacion(persona) {
    return (persona.nombre) + ", " + (persona.edad) + ", " + (persona.ciudad);
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["Programar", "squash", "Piano"];
console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}