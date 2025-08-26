// ARRAY DE NUMEROS
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayNumeros[2]);
arrayNumeros.push(20);
console.log(arrayNumeros);

// ARRAY MIXTO ANIDADO CON OTRO ARRAY AL QUE LE AGREGO DATOS
const arrayMixto = [...arrayNumeros, 'Juan', 1, true, 'Perro', null];
console.log(arrayMixto);
arrayMixto.push(10);
arrayMixto.push('Azul');
console.log(arrayMixto);

// ARRAY ALIMINANDO DATOS

arrayMixto.pop(); // Elimina el último dato agregado
console.log(arrayMixto);

arrayMixto.shift(); // Elimina el primer dato agregado
console.log(arrayMixto);

arrayMixto.reverse(); // Revierte el orden del array
console.log(arrayMixto);

// ARRAY CON VARIABLE

let nombre = 'Juan';
let apellido = 'Barria';
let edad = 26;

const persona = [nombre, apellido, edad];
console.log('Mi nombre es', persona[0], 'mi apellido es', persona[1], 'mi edad es', persona[2]);