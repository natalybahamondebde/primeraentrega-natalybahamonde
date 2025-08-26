/*Ejercicio 1: Calculadora de precio final con descuento
Crea una función que reciba el precio y la categoría del cliente ('normal', 'vip', 'premium').
    Aplica descuentos según categoría:
    - normal = 0%, vip = 10%, premium = 20%
        Ejemplos:
calcularPrecioFinal(100, 'vip') => 90
calcularPrecioFinal(200, 'premium') => 160*/

function descuento(precio, cat) {
    switch(cat) {
        case 'normal':
            return precio;
        case 'vip':
            return precio * 0.9;
        case 'premium':
            return precio * 0.8;
        default:
            return "La categoría no es válida.";
    }
}

let precioFinal = descuento(200, 'premium');
console.log("El precio con descuento es de", precioFinal);

/*
Ejercicio 2: Clasificador de triángulos
Crea una función que reciba 3 lados y devuelva:
    'Equilátero', 'Isósceles' o 'Escaleno', o 'No es un triángulo' si no cumple la regla triangular.
    Ejemplo:
clasificarTriangulo(3, 3, 3) => Equilátero
clasificarTriangulo(3, 4, 5) => Escaleno
*/

function triangulo(lado1, lado2, lado3) {
    if (lado1 === 0 || lado2 === 0 || lado3 === 0) {
        return "No es un triangulo";
    } else if (lado1 === lado2) {
        if (lado2 === lado3) {
            return 'Equilátero';
        } else if (lado2 !== lado3) {
            return 'Isósceles';
        }
    } else if (lado2 === lado3 || lado1 === lado3) {
        return 'Isósceles';
    } else if (lado1 !== lado3) {
        return 'Escaleno';
    } else {
        return "No es un triángulo";
    }
}

let trianguloLados = triangulo(6, 6, 1);
console.log(trianguloLados);

/*Ejercicio 3: Determinar estación del año
Crea una función que reciba el número de mes (1 al 12) y devuelva la estación del año:
    'Verano', 'Otoño', 'Invierno', 'Primavera' (asumiendo hemisferio sur).
Ejemplo:
    obtenerEstacion(1) => Verano
obtenerEstacion(6) => Invierno*/

function obtenerEstacion(mes) {
    if ((mes > 0 && mes <= 2) || mes === 12) {
        return 'Verano';
    } else if (mes > 2 && mes <= 5) {
        return 'Otoño';
    } else if (mes > 5 && mes <= 8) {
        return 'Invierno';
    } else if (mes > 8 && mes <= 11) {
        return 'Primavera';
    } else {
        return 'Mes no es válido';
    }
}

let estacion = obtenerEstacion(12);
console.log("Estamos en", estacion);

/*Ejercicio 4: Simulador de turnos
Función que reciba un número (1 a 7) y devuelva el tipo de atención según el día:
    1: Lunes - 'Médico general'
2: Martes - 'Odontología'
3: Miércoles - 'Pediatría'
4: Jueves - 'Laboratorio'
5: Viernes - 'Cardiología'
6-7: 'Sin atención'
Ejemplo:

    tipoAtencion(3) => Pediatría*/

function tipoAtencion(dia) {
    switch (dia) {
        case 1:
            return 'Medico general';
        case 2:
            return "Odontología";
        case 3:
            return "Pediatría";
        case 4:
            return "Laboratorio";
        case 5:
            return "Cardiología";
        case 6:
        case 7:
            return "Sin atención";
        default:
            return "No es válido";
    }
}

let atencion = tipoAtencion(3);
console.log(atencion);

/*
Ejercicio 5: Verificación de contraseña segura
Función que reciba una contraseña (string) y verifique:
    - Al menos 8 caracteres
- Al menos una mayúscula
- Al menos un número
Devuelve 'Segura' o 'Insegura'.
    Ejemplo:
verificarContrasena('Hola1234') => Segura*/

function verificarContrasena(contrasena) {
    let lowercased = contrasena.toLowerCase();
    if ((contrasena.length >= 8) && lowercased !== contrasena && /\d/.test(contrasena)) {
        return 'Segura';
    } else if((contrasena.length < 8)) {
        return "Contraseña tiene que ser mayor o igual a 8 caracteres";
    } else if (lowercased === contrasena) {
        return "Contraseña debe contener al menos una mayúscula";
    } else if (!/\d/.test(contrasena)) {
        return "Contraseña debe contener al menor un número";
    } else {
        return 'Insegura';
    }
}
let verificacion = verificarContrasena('Hola1234');
console.log(verificacion);

/*Ejercicio 6: Sistema de calificaciones complejo
Función que recibe una nota numérica (0 a 100) y devuelve una calificación textual:
90-100: 'Excelente'
80-89: 'Muy Bueno'
70-79: 'Bueno'
60-69: 'Regular'
0-59: 'Reprobado'
Usa switch con rangos calculados (por ejemplo, Math.floor(nota / 10)).
    Ejemplo:
        calificar(95) => Excelente*/

function calificar(cal) {
    let calif = Math.floor(cal / 10);
    switch (calif) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'Reprobado';
        case 6:
            return 'Regular';
        case 7:
            return 'Bueno';
        case 8:
            return 'Muy bueno';
        case 9:
        case 10:
            return 'Excelente';
        default:
            return 'No es valido';
    }}

    /*
    Ejercicio 6 con IF
    if (calificacion < 100 && calificacion >= 90) {
        return 'Excelente';
    } else if (calificacion < 90 && calificacion >= 80) {
        return 'Muy bueno';
    } else if (calificacion < 80 && calificacion >= 70) {
        return 'Bueno';
    } else if (calificacion < 70 && calificacion >= 60) {
        return 'Regular';
    } else if (calificacion < 60 && calificacion >= 0) {
        return 'Reprobado';
    } else {
        return 'No es válido'
    }
}*/

    let calificacion = calificar(79);
    console.log(calificacion);

