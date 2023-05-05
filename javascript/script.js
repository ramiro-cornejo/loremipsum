// Ejercicio 1

function escribirPiramide(numero) {
    for(let i = 1; i <= numero; i++) {
      let cadena = '';
  
      for(let j = 1; j <= i; j++) {
        cadena += j;
      }
      console.log(cadena);
    }
}

console.log("EJERCICIO N° 1");
console.log("Piramide con valor 6: ");
escribirPiramide(6);

console.log("Piramide con valor 3: ");
escribirPiramide(3);

// Ejercicio 2

function encontrarCoincidencias(array1, array2) {
  
    const coincidencias = [];
  
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        coincidencias.push(array1[i]);
      }
    }
  
    return coincidencias;
  }
  
  console.log("EJERCICIO N° 2");
  console.log(encontrarCoincidencias(["ford", "audi", "fiat"], ["fiat", "volvo", "bmw"]))

// Ejercicio 3

console.log("EJERCICIO N° 3");

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.montoTotal = 0;
        this.productos = [];
    }

    agregarProducto(nombre, precio, unidades) {
        let productoExistente = this.productos.find(producto => producto.nombre === nombre);

        if(productoExistente) {
            productoExistente.unidades += unidades;
            console.log(`El producto ${nombre} ya existe con ${productoExistente.unidades} unidades.`);
        }else {
            let producto = new Producto(nombre, precio);
            producto.unidades = unidades;

            this.productos.push(producto);
        }

        this.montoTotal += precio * unidades;
    }
}

let carrito = new Carrito();
carrito.agregarProducto("Leche", 2.5, 3);
carrito.agregarProducto("Leche", 2.5, 3);
carrito.agregarProducto("Queso", 5, 2);

console.log(carrito);




