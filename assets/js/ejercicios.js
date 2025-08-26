/*Ejercicios de Práctica en JavaScript

1. Variables (10-15 min)
Ejercicio 1.1:
Declará 3 variables:
    •	nombre (string)
•	edad (número)
•	esEstudiante (booleano)
Mostralas en consola usando console.log().
*/

let nombre = "Nataly";
let edad = 19;
let esEstudiante = true;
console.log("El nombre es:", nombre, "Edad:", edad, "¿Es estudiante?", esEstudiante);

/*
    Ejercicio 1.2:
Cambiá los valores de las variables y volvé a mostrarlas. ¿Qué sucede si cambiás el tipo de dato?
*/

nombre = "Krishna";
edad = "22";
esEstudiante = "es estudiante";
console.log("El nombre es:", nombre, "Edad:", edad, "¿Es estudiante?", esEstudiante);

/*
    2. Arrays (20-25 min)
Ejercicio 2.1:
Creá un array llamado frutas que contenga 5 frutas.
•	Mostrá el array completo.
•	Mostrá solo la primera y la última fruta.
•	Agregá una fruta más al final.
•	Cambiá el valor de la segunda fruta por otra.
*/

let frutas = ["platano", "manzana", "pera", "naranja", "durazno"];
console.log("Las frutas iniciales:", frutas);
console.log("La primera fruta es:", frutas[0],"La última fruta es:", frutas[4]);
frutas.push("uva")
console.log("Se le suma la fruta uva:", frutas);
frutas[1] = "granada";
console.log("Las frutas finales:", frutas);

/*
    Ejercicio 2.2:
Creá un array de 4 números.
    Calculá el promedio de esos números y mostralo en consola (sin usar funciones).
*/

numeros = [5, 6, 2, 9];
console.log("Los números son", numeros);
promedio = (numeros[0] + numeros[1] + numeros[2] + numeros[3])/4;
console.log("El promedio es", promedio);

/*
Ejercicio 3.1:
Creá un objeto llamado persona con las siguientes propiedades: Nombre, Edad y Profesión.
Mostrá el nombre y la profesión.
Cambiá la edad a 31.
Agregá una nueva propiedad: esArgentino con valor true.
*/

let persona = {
    nombre: "Marcos",
    edad: 26,
    profesion: "doctor"
};
console.log(persona);
console.log("Nombre:", persona.nombre, "Profesion:", persona.profesion);
persona.edad = 31;
console.log(persona);
persona.esArgentino = true;
console.log(persona);

/*
    Ejercicio 3.2:
Creá un array de 3 objetos tipo persona. Mostrá el nombre de cada persona usando console.log() y acceso por índice.
*/

let personas = [
    { nombre: "Juan", edad: 74, profesion: "relojero"},
    { nombre: "Diego", edad: 26, profesion: "enfermero"},
    { nombre: "Fernando", edad: 34, profesion: "chef"}
];
console.log(personas[0].nombre, personas[1].nombre, personas[2].nombre);

/*
4. Condicionales if / else if / else (20-25 min)
Ejercicio 4.1:
Creá una variable nota (número del 1 al 10).
Usá condicional if/else if/else para mostrar:
    •	"Desaprobado" si la nota es menor que 4.
•	"Regular" si es entre 4 y 6.
•	"Bien" si es 7 u 8.
•	"Excelente" si es 9 o 10.
*/

let nota = 9;

if (nota === 9 || nota === 10) {
    console.log("Excelente");
} else if (nota === 8 || nota === 7) {
    console.log("Bien");
} else if (nota < 7 && nota > 3) {
    console.log("Regular");
} else if (nota < 4 && nota >= 1) {
    console.log("Desaprobado");
} else {
    console.log("La nota no es válida");
}

/*
Ejercicio 4.2:
Creá dos variables: usuario y password.
    Simulá un login simple con condicionales:
    •	Si el usuario es "admin" y el password "1234", mostrar "Acceso concedido".
•	Si solo uno es incorrecto, mostrar "Usuario o contraseña incorrectos".
•	Si ambos están vacíos, mostrar "Por favor completá los campos".
*/

let usuario = "adn";
let password = 1234;

if (usuario === "admin" && password === 1234) {
    console.log("Acceso concedido");
} else if (usuario === "admin" || password === 1234) {
    console.log("Usuario o contraseña incorrectos");
} else if (usuario === undefined || password === undefined) {
    console.log("Por favor completa los campos");
} else {
    console.log("Acceso denegado, intente de nuevo");
}

/*
5. Condicional switch (20-25 min)
    Ejercicio 5.1:
    Creá una variable dia con un valor de día de la semana (por ejemplo "lunes").
    Usá switch para mostrar:
    •	Si es lunes a viernes → "Día laboral"
•	Si es sábado o domingo → "Fin de semana"
•	Si no es un día válido → "Día inválido"
*/

let dia = "sábado";
switch (dia) {
    case "lunes":
    case "Lunes":
    case "martes":
    case "Martes":
    case "miércoles":
    case "Miércoles":
    case "jueves":
    case "Jueves":
    case "viernes":
    case "Viernes":
        console.log("Dia laboral");
        break;
    case "sábado":
    case "Sábado":
    case "domingo":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día inválido");
        break;
}

/*
        Ejercicio 5.2:
        Creá una variable color con un string (por ejemplo "rojo").
        Usá switch para mostrar un mensaje según el color:
•	"Rojo → Stop"
•	"Verde → Avanzar"
•	"Amarillo → Precaución"
•	Cualquier otro → "Color no reconocido"
*/

let color = "Amarillo";

switch (color) {
    case "rojo":
    case "Rojo":
        console.log("Stop");
        break;
    case "verde":
    case "Verde":
        console.log("Avanzar");
        break;
    case "amarillo":
    case "Amarillo":
        console.log("Precaución");
        break;
    default:
        console.log("Color no reconocido");
        break;
}