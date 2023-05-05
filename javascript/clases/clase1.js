// Definimos una variable
var edad; // es recomendable no usar var: el scope de let lo hace mas seguro.
let edad;

// Asignamos una variable
edad = 30;

// Definimos y Asignamos
let edadModificada = 30;

// Nombres de variable son case sensitive, no es lo mismo que la anterior
let edadmodificada = 30;

// Constantes, se deben asignar en la definicion
const PI = 3.14;
console.log(PI);

// Esto falla no podemos volver a asignar una constante
// PI = 3.15;
// console.log(PI);

// Operadores matematicos
let precio = 10;
let cantidad = 25;

let resultado = precio * cantidad;
console.log(resultado);

console.log(2 + 2);
console.log(2 ** 34);
console.log(3234234 % 2);

// Operadores Logicos
let esBarato = true;

console.log("Preguntando el precio");
if(esBarato) {
    console.log("lo compro");
} else {
    console.log("pedir descuento");
}
console.log("tomo la decision de comprar o no");

// Operadores Logicos: AND y OR
let meGusta = true;
if(esBarato && meGusta) { // tienen que darse las dos condiciones
    console.log("Lo compro!")
}

// Operadores Logicos: OR
let estaEnOferta = true;
if(esBarato || estaEnOferta){ // si se dá una de las condiciones es suficiente
    console.log("Lo compro!")
}

// == comparacion
// let precio = 20;
let esCaro;

console.log(typeof precio);
console.log(typeof "20");

// Condicionales: if
// Documentacion en el codigo
// Voy a preguntar si el precio es caro
if(esCaro) {
   console.log("hago algo")
}

// Condicionales: switch
let page = 'PROFILE';

switch (10 < 1) {
    case true:
        console.log("es true");
        break;
    case false:
        console.log("10 no es mayor a 1");
        break;

    default:
        console.log("default");
}
console.log("Termino la ejecucion");


// Iteradores: while. CUIDADO los ciclos infinitos y condicion de corte
let sigoEjecutando = true;
while (sigoEjecutando) {
    console.log("hacer algo")
    sigoEjecutando = false;
}

let contador = 0;
while (contador <= 30) {
    console.log("estoy contando y por el: " + contador);
    contador = contador + 1;
}



// Iteradores: for
for (let i = 0; i < 10; i++) {
  console.log("estoy contando con for: " + i);
}

console.log("indice global: " + i);