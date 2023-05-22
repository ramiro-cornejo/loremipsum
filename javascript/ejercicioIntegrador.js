
/*
A continuacion podemos encontrar el código de un supermercado que vende productos.
El código contiene
    - una clase Producto que representa un producto que vende el super
    - una clase Carrito que representa el carrito de compras de un cliente
    - una clase ProductoEnCarrito que representa un producto que se agrego al carrito
    - una función findProductBySku que simula una base de datos y busca un producto por su sku
El código tiene errores y varias cosas para mejorar / agregar
​
Ejercicios
1) Arreglar errores existentes en el código
    a) Al ejecutar agregarProducto 2 veces con los mismos valores debería agregar 1 solo producto con la suma de las cantidades.    
    b) Al ejecutar agregarProducto debería actualizar la lista de categorías solamente si la categoría no estaba en la lista.
    c) Si intento agregar un producto que no existe debería mostrar un mensaje de error.
​
2) Agregar la función eliminarProducto a la clase Carrito
    a) La función eliminarProducto recibe un sku y una cantidad (debe devolver una promesa)
    b) Si la cantidad es menor a la cantidad de ese producto en el carrito, se debe restar esa cantidad al producto
    c) Si la cantidad es mayor o igual a la cantidad de ese producto en el carrito, se debe eliminar el producto del carrito
    d) Si el producto no existe en el carrito, se debe mostrar un mensaje de error
    e) La función debe retornar una promesa
​
3) Utilizar la función eliminarProducto utilizando .then() y .catch()
​
*/


// Cada producto que vende el super es creado con esta clase
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock = 10) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock; // inicio stock = 10 o igual al ingresado
    }
}

// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];


// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vació
    constructor() {
        this.precioTotal = 0;
        this.productos = [];
        this.categorias = [];
    }

    /**
     * función que agrega @{cantidad} de productos con @{sku} al carrito
     */
    async agregarProducto(sku, cantidad) {
        console.log(`Agregando ${cantidad} u. de ${sku}`);

        try {
            // Busco el producto en la "base de datos"
            const producto = await findProductBySku(sku);
            // Creo nuevo producto
            const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad, producto.categoria, producto.precio);
            // Verificar si existe el producto
            const productExistente = this.productos.find((p) => p.sku === sku);

            if (productExistente) {
                console.log(`Producto con SKU: ${sku} - NOMBRE: ${producto.nombre} ya existe.`)
                if (productExistente.cantidad + nuevoProducto.cantidad > producto.stock) {
                    console.log(`${nuevoProducto.cantidad} unidades de ${producto.nombre} no es posible agregar. 
                    Stock disponible: ${producto.stock - productExistente.cantidad} unidades.`);
                } else {
                    productExistente.cantidad += nuevoProducto.cantidad;
                    this.precioTotal = this.precioTotal + (producto.precio * cantidad);
                    console.log(`Cantidad de producto ${producto.nombre} en carrito actualizada a: ${productExistente.cantidad} unidades.PRECIO TOTAL: $ ${this.precioTotal}`)
                }
            } else if (nuevoProducto.cantidad > producto.stock) {
                console.log(`${nuevoProducto.cantidad} unidades de ${producto.nombre} no es posible agregar.
                STOCK DISPONIBLE: ${producto.stock} unidades.`);
            } else {
                this.productos.push(nuevoProducto);
                this.precioTotal = this.precioTotal + (producto.precio * cantidad);
                if (!this.categorias.includes(producto.categoria)) {
                    this.categorias.push(producto.categoria);
                }
                console.log(`Producto con SKU: ${sku} - NOMBRE: ${producto.nombre} - CATEGORIA: ${producto.categoria} ,fue agregado al carrito.`);
            }
        } catch (error) {
            console.error(error)
        }
    }
    eliminarProducto(sku, cantidad) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('------------- Eliminando productos -------------');
                console.log(`Se eliminara ${cantidad} u. de ${sku}`);

                const productExistente = this.productos.find((p) => p.sku === sku);

                if(!productExistente) {
                    reject(`Producto con SKU: ${sku} no existe en el carrito.`);
                    return;
                }
                if(cantidad < productExistente.cantidad) {
                    productExistente.cantidad -= cantidad;
                    this.precioTotal = this.precioTotal - (productExistente.precio * cantidad);
                } else {
                    const index = this.productos.indexOf(productExistente);
                    this.productos.splice(index, 1);
                    this.categorias = this.productos.map((p) => p.categoria);
                    this.precioTotal <= productExistente.precio * productExistente.cantidad;
                }
                resolve(`Se ha eliminado ${cantidad} u. del producto ${sku} en carrito.`);

            },1500)
        })
    }
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito
    categoria; // Categoria
    precio;

    constructor(sku, nombre, cantidad,categoria, precio) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.precio = precio;
    }

}

// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Product ${sku} not found`);
            }
        }, 1500);
    });
}

// ------------ AGREGAR PRODUCTOS (Ejercicios a,b,c)
console.log('------------- Inicio Lista agregar productos -------------');
const carrito = new Carrito();
carrito.agregarProducto('WE328NJ', 2)   // Agregar un nuevo producto.
carrito.agregarProducto('WE328NJ', 1)   // Agregar un producto que ya existe.
carrito.agregarProducto( 'frutas', 5)   // Actualizar la lista de categorías solamente 
                                        // si la categoría no estaba en la lista.
carrito.agregarProducto('SK4DD1A',3)    // Agregar un producto que no existe.

carrito.agregarProducto('XX92LKI', 25)  // Prueba de agregar productos pasando el stock disponible.
carrito.agregarProducto('PV332MJ', 5)
    .catch((error) => console.error(error));
console.log('------------- Fin Lista agregar productos -------------');


// ------------- ELIMINAR PRODUCTOS
carrito.eliminarProducto('WE328NJ', 1)  // Elimina producto si la cant. es menor a la existente.
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

carrito.eliminarProducto('PV332MJ', 10) // Elimina producto si la cant. es >= a la cant. de ese producto en el carrito.
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

carrito.eliminarProducto('frutas', 1)  // Si el producto no existe en el carrito, se debe mostrar un mensaje de error
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });    


