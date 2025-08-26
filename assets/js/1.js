function suma(a,b){
    return a+ b;
}

// FAT ARROW FUNCTION ; SON UNA FORMA MAS SIMPLE Y CONCISA DE ESCRIBIR FUNCIONES

const sumar = (a,b) => a + b;

// Nombre de la función (asignada a una constante) const [palabra reservada]
// Nombre de la funcion
// Igual =
// Parámetros de entrada (a, b)
// Operator =>
// Expresión a + b

const restar = (a, b) => {
    const resultado = a - b;
    return resultado;
}

restar(5,3);

// export default function
// import {nombreDeLaFuncion} from './nombreDelArchivo.js'
// <nombreDeLaFuncion parametro='parametro'>

//export default nombreDeLaArrowFunction;

//Componente

const componenteUno(textoUno) =>  {
    return {
        <h1>(texto)</h1>
}
};