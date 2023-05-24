// File System Node
const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
    fs.writeFile('archivo_copia.txt', data, (err,data) => {
        console.log('Archivo duplicado');
    })
});