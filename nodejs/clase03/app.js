// EXPRESS 
    /*  
        -Framework web para node
        -Manejador http
        -Usa esctructura middlewares
     */

// MIDDLEWARE 
    /*
        - Función que se ejecuta antes o despues del manejo de una ruta
        - No finaliza ciclo de llamada, debe llamar si o si al metodo next para avanzar con la cadena.
        - Tipos: De app / ruta / manejo de errores / incorporadores a express / terceros 
    
    */

// EJEMPLO EXPRESS
var express = require('express');
var app = express();
var booksController = require('./controllers/booksController');

// La app completa use middleware express.json
app.use(express.json())

// ruta usando app
app.get('/', function(req, res) {
  res.sendFile("/home/ramiro/Xacademy/loremipsum/nodejs/clase03/index.html");
});

// definir endpoint 
// la function es controlador

app.get('/endpoint', function(req, res) {
    res.send("Prueba definir endpoint");
});

// Ejemplo con controlador por fuera
app.get('/controlador', controladorPrueba)

app.post('/post', middlewareRequestPost ,controladorRequestPost)

function controladorRequestPost(req, res) {
    console.log("Este es el controlador")
    res.status(200).send("Dato recibido")
}

function middlewareRequestPost(req,res , next) {
    console.log("Middleware")
    let cuerpoSolicitud = req.body;

    // No esta funcionando 
    if (!cuerpoSolicitud.nombre) {
        res.status(400).send("Falta dato nombre")
    } else {
        next()
    }
}

app.listen(3000, function() {
    console.log("Aplicacion web con express funcionando");
})


function controladorPrueba(req, res) {
    res.send("Ejemplo de controlador")
}


