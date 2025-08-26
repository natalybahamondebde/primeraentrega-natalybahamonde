/*
Ejercicio 1: Función que devuelve un saludo simple
Descripción: Crea una función que devuelva el saludo "Hola, mundo!".
Luego, llama a la función y muestra el resultado en la consola.
 */
function hola() {
    console.log("Hola, mundo!");
}

hola();

/*
Ejercicio 2: Función que suma dos números
Descripción: Define una función que tome dos números como argumentos
y devuelva su suma. Llama a la función y muestra el resultado en la consola.
*/

function suma(a, b) {
    return a + b;
}

let a = 56;
let b = 20;
console.log(a, "más", b, "es igual a", suma(a, b));

/*
Ejercicio 3: Función que multiplica dos números
Descripción: Crea una función que tome dos números como argumentos y devuelva su producto.
Llama a la función y muestra el resultado en la consola.
*/

function multi(a, b) {
    return a * b;
}

a = 28;
b = 4;
console.log(a, "multiplicado por", b, "es igual a", multi(a, b));

/*
Ejercicio 4: Función que resta dos números
Descripción: Define una función que tome dos números como argumentos
y devuelva su diferencia. Llama a la función y muestra el resultado en la consola.
*/

function resta(a, b) {
    return a - b;
}

a = 50;
b = 40;
console.log(a, "menos", b, "es igual a", resta(a, b));

/*
Ejercicio 5: Función que divide dos números
Descripción: Crea una función que tome dos números como argumentos
y devuelva su cociente. Llama a la función y muestra el resultado en la consola.
*/

function div(a, b) {
    return a / b;
}

a = 10;
b = 2;
console.log(a, "dividido por", b, "es igual a", div(a, b));