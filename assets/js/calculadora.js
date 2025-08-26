function calculadora (a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            alert("Operador no válido");
    }
}

let num1 = parseInt(prompt("Digite valor 1:"));
let num2 = parseInt(prompt("Digite valor 2:"));
let operator = prompt("Digite operador: suma = +, resta = -, multiplicación = *, división = /");
let resultado = calculadora(num1, num2, operator);
alert(resultado);