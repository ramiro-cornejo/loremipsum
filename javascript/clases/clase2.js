// ------------------------ FUNCIONES ----------------------
// Declarar una funcion
// camelCase
function saludar(nombre, apellido) {
    console.log("Hola " + nombre + ", " + apellido);
  }
  
  // Invocar a una funcion
  saludar();
  
  // Parametros o Argumentos
  saludar("Matias", "Benitez");
  saludar("Elismer", "Bongiovani");
  saludar("Quentin", "Tarantino");
  saludar("Gaston", "Fernandez");
  
  // Directiva Return
  function sumar(numero1, numero2) {
    let resultado = numero1 + numero2; // variable local
    return resultado;
  }
  let resultado = sumar(2, 2); // variable externa
  console.log(resultado);
  
  // Funcion expresion
  const saludar = function(nombre, apellido) {
      console.log("Hola " + nombre + ", " + apellido);
    }
  console.log(saludar);
  
  // ------------------------ ERRORES ----------------------
  try {
    //hacemos algo
    // sucede un error
    // esto no se ejecuta
  } catch (error) {
    // sigue la ejecucion aca
  } finally {
    // siempre ejecutar esto
  }
  
  // Errores de sintaxis
  function sumar(a, b) {
    return a + c;
  }
  
  console.log("Inicio del programa");
  try {
    let result = sumar(2, 2);
    console.log("Resultado: " + result);
  } catch (error) {
    console.log("Hubo un error inesperado: "
    + error.name + ". Desc: "+ error.message);
  }
  console.log("Fin del programa");
  
  // Errores en tiempo de ejecucion
  function dividir(a, b) {
    if (b === 0) {
      throw "No se puede dividir por 0.";
    }
    return a / b;
  }
  console.log("Inicio del programa");
  try {
    let result = dividir(2, 0);
    console.log("Resultado: " + result);
  } catch (error) {
    console.log("Hubo un error inesperado: " + error);
  }
  
  console.log("Fin del programa");
  
  // ------------------------ OBJETOS ----------------------
  const lapicera = {
    marca: "Faber",
    color: "Negra",
    precio: 100,
    tieneTapa: true,
  };
  // Pueden tener distintos tipos de datos
  // Cuantos atributos van a tener? Los que hagan falta
  // Funciones: metodos
  
  // Que se puede hacer? Acceder a los atributos
  const precio = lapicera["precio"];
  const color = lapicera.color;
  // Son distintas notaciones
  
  // Modificar una propiedad
  lapicera.marca = "Faber";
  console.log(lapicera);
  
  // Borrar una propiedad
  delete lapicera.tieneTapa;
  
  // Agregar una propiedad
  lapicera.origen = "Industria Argentina";
  
  console.log(lapicera);
  
  // Validar que una propiedad existe: palabra clave in
  console.log("precio" in lapicera);
  
  // Una propiedad puede ser un objeto
  
  const direccionPersona = {
      calle: "Calle falsa",
      numero: 123,
    };
  
  const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: direccionPersona,
  };
  console.log(persona);
  
  // ------------------------ Clases ----------------------
  // Objeto literal
  const persona1 = {
    nombre: "Juan",
    edad: 30,
  };
  
  class Persona {
    nombre;
    apellido;
    edad;
  
    constructor() {
      this.nombre = "Matias";
      console.log("se ejecuta el constructor");
    }
  
    presentarse(){
      console.log("hola mi nombre es: " + this.nombre);
    }
  }
  const persona2 = new Persona("Matias").presentarse();
  
  // Herencia
  
  class Alumno extends Persona {
    colegio = "xAcademy";
  }
  
  const alumno = new Alumno();
  
  const persona3 = new Persona("nombreInicial", "apellidoInicial");
  const alumno1 = new Alumno("nombreInicial", "apellidoInicial", "colegioInicial");
  
  // ------------------------ ARRAYS ----------------------
  // nombres de variables
  // Separados por coma
  // los elementos pueden ser de distintos tipos de datos. No se recomienda.
  // Manejo de indices: indice 0
  
  const listaDeAlumnos = ["Alumno 1", "Alumno 2", "Alumno 3"];
  console.log(listaDeAlumnos);
  
  // Acceso: con corchetes
  console.log(listaDeAlumnos[0]);
  
  // como crear un array
  const array = new Array();
  const array1 = [];
  
  // modificar un array
  listaDeAlumnos[2]= "Alumno 3 bis";
  console.log(listaDeAlumnos[2]);
  
  // Longitud: propiedad length
  
  for (let index = 0; index < listaDeAlumnos.length; index++) {
    const element = listaDeAlumnos[index];
    console.log(element);
  }