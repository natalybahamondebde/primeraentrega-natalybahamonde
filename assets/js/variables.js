// Esto es un comentario de linea

/* Esto es de
   multiples lineas
 */

// ESTO ES UN CONSOLE.LOG
console.log("Esto es un console.log");

let habilidad1 = "Cdash";
let habilidad2 = "Dash";
let habilidad3 = "Mantis Claw";

let sitio1 = "Fungal Wastes";
let sitio2 = "Forgotten Crossroads";
let sitio3 = "Blue Lake";

// Assign characters their specific abilities and locations
let personaje1 = { name: "The little ghost", habilidad: habilidad1, sitio: sitio3, voice: "nothing"  };
let personaje2 = { name: "The Hollow Knight", habilidad: habilidad2, sitio: sitio2, voice: "*scream*" };
let personaje3 = { name: "Hornet", habilidad: habilidad3, sitio: sitio1, voice: "SHAW!" };

// Function to print character action
function narrateAction(personaje) {
    console.log(`${personaje.name} uses ${personaje.habilidad} through ${personaje.sitio} saying ${personaje.voice}`);
}


// Call the function for each character
narrateAction(personaje1);
narrateAction(personaje2);
narrateAction(personaje3);

