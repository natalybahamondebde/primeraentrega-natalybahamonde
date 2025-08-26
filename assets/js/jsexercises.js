/*
Ejercicio 1: Calculadora básica
Crea una función que reciba dos números y un operador (`+`, `-`, `*`, `/`). Según el operador, realiza la
operación correspondiente y devuelve el resultado. Si el operador es inválido, devuelve un mensaje de error.
Si se intenta dividir por cero, avisa del error.
*/

function calculadora(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b == 0 || a == 0) {
                return 'No puedes dividir por cero';
            } else {
                return a / b;
            }
        default:
            return 'Operador no válido';
    }
}

calcular = calculadora(4, 8, '*');
console.log(calcular);

/*
Ejercicio 2: Clasificar edad
Haz una función que reciba una edad y devuelva si la persona es "Niño" (0-12), "Adolescente" (13-18),
"Adulto" (19-65) o "Adulto mayor" (más de 65). Considera edades negativas como inválidas.
*/

function edad(edad) {
    if (edad > 65) {
        return 'Adulto mayor';
    } else if (edad <= 65 && edad > 18) {
        return 'Adulto';
    } else if (edad <= 18 && edad > 12) {
        return 'Adolescente';
    } else if (edad <= 12 && edad >= 0) {
        return 'Niño';
    } else {
        return 'Inválido';
    }
}

calcularEdad = edad(-5);
console.log(calcularEdad);

/*
Ejercicio 3: Día de la semana
Crea una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente. Si el
número está fuera de rango, devuelve un mensaje de error.
*/

function diaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Lunes';
        case 2:
            return 'Martes';
        case 3:
            return 'Miércoles';
        case 4:
            return 'Jueves';
        case 5:
            return 'Viernes';
        case 6:
            return 'Sábado';
        case 7:
            return 'Domingo';
        default:
            return 'Error';
    }
}

calcularDia = diaSemana(5);
console.log(calcularDia);

/*
Ejercicio 4: Validar contraseña
Haz una función que reciba una contraseña y valide que tenga al menos 6 caracteres, contenga al menos
una letra mayúscula y un número. Devuelve mensajes indicando qué condición no cumple o si es válida.
*/



/*
Ejercicio 5: Evaluar nota
Crea una función que reciba una nota numérica (0 a 100) y devuelva su concepto (A, B, C, D, F) según
rangos definidos. Si la nota está fuera del rango válido, devuelve un mensaje de error.
*/



/*
Ejercicio 6: Tipo de triángulo
Haz una función que reciba tres números representando los lados de un triángulo. Devuelve si el triángulo es
equilátero, isósceles o escaleno. Si alguno de los lados es menor o igual a cero, devuelve un error.
 */

function triangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
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

/*
Ejercicio 7: Estado civil
Crea una función que reciba un código (por ejemplo: S, C, D, V) y devuelva el estado civil correspondiente
("Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"). Si el código no es válido, devuelve un mensaje de error.
*/

/*
Ejercicio 8: Día laboral o fin de semana
Escribe una función que reciba un número del 1 al 7 y devuelva si es "Día laboral" (1 a 5) o "Fin de semana"
(6 y 7). Si el número es inválido, devuelve un mensaje de error.
*/



/*
Ejercicios JavaScript: Funciones con If-Else y Switch

Ejercicio 9: Convertir temperatura
Haz una función que reciba un valor numérico y una unidad de temperatura ('C' o 'F'). Si la unidad es 'C',
convierte el valor a Fahrenheit; si es 'F', convierte a Celsius. Si la unidad no es válida, devuelve un mensaje
de error.
*/



/*
Ejercicio 10: Calcular descuento
Crea una función que reciba el total de una compra y el tipo de cliente (`regular`, `premium`, `vip`). Según el
tipo, aplica un porcentaje de descuento (por ejemplo: 5%, 10%, 15%) y devuelve el total con el descuento
aplicado. Si el tipo de cliente no existe, no aplica descuento.
 */

function descuento(precio, cat) {
    switch(cat) {
        case 'regular':
            return precio * 0.95;
        case 'vip':
            return precio * 0.8;
        case 'premium':
            return precio * 0.75;
        default:
            return precio;
    }
}

let precioFinal = descuento(200, 'premium');
console.log("El precio es de", precioFinal);