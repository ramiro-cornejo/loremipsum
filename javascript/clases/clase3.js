// ------------------------ FUNCIONES FLECHA ----------------------
// Funcion declaracion
function sumar(a, b) {
    return a + b;
  }
  
  // Misma funcion en forma de expresion
  const sumar2 = function (a, b) {
    return a + b;
  };
  
  // Misma funcion en formato de flecha
  const sumar3 = (a, b) => {
    return a + b;
  };
  
  const result = sumar3(2, 4);
  console.log(result);
  
  // Si tenes 1 sola linea de codigo
  // Podes borrar las llaves y el return
  // Arrow function
  const sumar4 = (a, b) => a + b;
  
  const saludar = (nombre, apellido) =>
    console.log(`Hola: ${nombre} ${apellido}`);
  saludar("Matias", "Benitez");
  
  // Si la funcion recibe 1 solo parametro
  // Podes borrar los parentesis
  const saludo = () => console.log("Hola");
  const saludo2 = (nombre) => console.log("Hola " + nombre);
  const saludo3 = nombre => console.log("Hola " + nombre);
  
  // ------------------------ CALLBACK FUNCTIONS ----------------------
  // llamame despues
  function cafetera() {
    console.log("Preparando el cafe");
    return "Cafe";
  }
  console.log(cafetera);
  
  function tomarCafe(cafetera) {
    console.log(cafetera);
    const resultadoDeCafetera = cafetera();
    console.log("me estoy tomando un: " + resultadoDeCafetera);
  }
  
  tomarCafe(cafetera); // puedo pasar mas de un argumento: tomarCafe(cafetera1, cafetera2). SE USA CALLBACK.
  tomarCafe(cafetera()); // Se ejecuta la funcion cafetera y el resultado se lo paso a tomarCafe. NO SE USA CALLBACK.
  
  // Objeto Literal
  const auto2 = {};
  
  const auto = {
    color: "blanco",
    titular: {
      nombre: "Matias",
      telefono: "123",
    },
  };
  // Const vs let: una variable declarada como const no se puede reasignar (usar el =)
  auto.indicacion = "otra indicacion"; // no estoy reasignando auto, solo le agrego una propiedad
  console.log(auto);
  
  const tallerMecanico = (auto, accion) => {
    console.log("Reparando el auto");
    accion(auto.titular); // hacer algo
  };
  
  const dejarloEnLaCalle = (titular) =>
    console.log("dejamos el auto en la calle de:" + titular.nombre);
  
  const llamarPorTelefono = (titular) =>
    console.log(`Llamamos a ${titular.nombre} al telefono: ${titular.telefono}`);
  
  tallerMecanico(auto, dejarloEnLaCalle);
  
  // ------------------------ FUNCTIONAL PROGRAMMING ----------------------
  //               0   1  2  3   4
  const numeros = [2, 5, 10, -3, 50];
  
  function buscar(n) {
    return n === 10;
  }
  
  // buscar(10);
  
  const encontrado = numeros.find((n) => n === 10);
  // console.log(encontrado);
  // const encontrado = numeros.find(buscar);
  
  // Un ejemplo de como funciona la funcion find en su cuerpo.
  function find(numeros, funcionComparar) {
    for (let i = 0; i < numeros.length; i++) {
      if (funcionComparar(numeros[i])) {
        return numeros[i];
      }
    }
  }
  // Usamos un operador de comparacion >
  function findMayor(numeros, numeroAComparar) {
    for (let i = 0; i < numeros.length; i++) {
      if (numeroAComparar > numeros[i]) {
        return numeros[i];
      }
    }
  }
  // Usamos un operador de comparacion ===
  function findIgual(numeros, numeroAComparar) {
    for (let i = 0; i < numeros.length; i++) {
      if (numeroAComparar === numeros[i]) {
        return numeros[i];
      }
    }
  }
  // En lugar de escribir muchas funciones muy parecidas que solo cambia en un operador
  // recibimos el predicado por parametro en forma de funcion
  // const resultado = findMayor(numeros, 10);
  const resultado = findIgual(numeros, 10);
  console.log(resultado);
  
  if (encontrado === undefined) {
    console.log("No se encontro");
  } else {
    console.log(encontrado);
  }
  
  // Reduce
  //           0  1  2
  const numeros1 = [2, 5, 10];
  
  const resultado2 = numeros1.reduce(
    //              7          10
    (acumulado, actual) => acumulado + actual,
    0
  );
  
  console.log(resultado2);