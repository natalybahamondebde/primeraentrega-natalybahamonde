let diaSemana = prompt("¿Qué día es hoy?");

// Condicional IF

/*

if (diaSemana == 1 || diaSemana == "Domingo" || diaSemana == "domingo" || diaSemana == "DOMINGO") {
    alert("hoy es Domingo");
} else if (diaSemana == 2 || diaSemana == "Lunes" || diaSemana == "lunes" || diaSemana == "LUNES") {
    alert("hoy es Lunes");
} else if (diaSemana == 3 || diaSemana == "Martes" || diaSemana == "martes" || diaSemana == "MARTES") {
    alert("hoy es Martes");
} else if (diaSemana == 4 || diaSemana == "Miercoles" || diaSemana == "miercoles" || diaSemana == "MIERCOLES") {
    alert("hoy es Miercoles");
} else if (diaSemana == 5 || diaSemana == "Jueves" || diaSemana == "jueves" || diaSemana == "JUEVES") {
    alert("hoy es Jueves");
} else if (diaSemana == 6 || diaSemana == "Viernes" || diaSemana == "viernes" || diaSemana == "VIERNES") {
    alert("hoy es Viernes");
} else if (diaSemana == 7 || diaSemana == "Sabado" || diaSemana == "sabado" || diaSemana == "SABADO") {
    alert("hoy es Sabado");
} else {
    alert("no coincide con ningun día de la semana");
}

*/

// Condicional Switch

switch (diaSemana) {
    case "1":
    case "Domingo":
    case "domingo":
        alert("hoy es Domingo");
        break;
    case "2":
    case "Lunes":
    case "lunes":
        alert("hoy es Lunes");
        break;
    case "3":
    case "Martes":
    case "martes":
        alert("hoy es Martes");
        break;
    case "4":
    case "Miercoles":
    case "miercoles":
        alert("hoy es Miercoles");
        break;
    case "5":
    case "Jueves":
    case "jueves":
        alert("hoy es Jueves");
        break;
    case "6":
    case "Viernes":
    case "viernes":
        alert("hoy es Viernes");
        break;
    case "7":
    case "Sabado":
    case "sabado":
        alert("hoy es Sabado");
        break;
    default:
        alert("no coincide con ningun día de la semana");
}

