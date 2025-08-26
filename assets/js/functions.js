// Función simple con console.log
function miEjemplo() {
    console.log("Hola mundo");
}

miEjemplo();

// Función con parámetro
// A los parámetros se le pasan atributos.
function miNombre(nombre) {
    console.log("Hola", nombre);
}

miNombre("Sly");

// Función con 2 parámetros
function sumar(a, b) {
    return a + b;
}

let suma = sumar(5, 7);
console.log(suma);

function multi(a, b) {
    return a * b;
}

let a = 10;
let b = 20;
console.log(sumar(a, b));