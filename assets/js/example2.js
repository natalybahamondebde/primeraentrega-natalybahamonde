/* 1) Declarar un Objeto Simple

Declara un objeto persona con las propiedades nombre, edad y ciudad.
    Muestra el objeto completo usando console.log. */

let persona = {
    nombre: 'Jane',
    edad: 26,
    ciudad: 'Castro'
};

console.log(persona);

/* 2) Acceder a una Propiedad de un Objeto

Declara un objeto coche con las propiedades marca, modelo y año.
    Muestra la propiedad modelo del objeto usando console.log. */

let coche = {
    marca: 'Toyota',
    modelo: 'Full',
    anio: 1990
};

console.log(coche);

/* 3) Modificar una Propiedad de un Objeto

Declara un objeto libro con las propiedades titulo y autor.
    Cambia el valor de la propiedad autor a 'George Orwell'.
    Muestra el objeto modificado usando console.log. */

let libro = {
    titulo: 'La muerte',
    autor: 'Johnas Fleur'
}

console.log(libro);

libro.autor = 'George Orwell';
console.log(libro);

/* 4) Añadir una Nueva Propiedad a un Objeto

Declara un objeto pelicula con las propiedades titulo y director.
    Añade una nueva propiedad año con el valor 1994.
Muestra el objeto completo usando console.log. */

let pelicula = {
    titulo: 'El regreso del payaso',
    director: 'Marcus Heil'
}

console.log(pelicula);

pelicula.anio = 1994;
console.log(pelicula);