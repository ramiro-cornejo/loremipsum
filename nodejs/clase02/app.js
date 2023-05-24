// Protocolo HTTP

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bienvenidos al Servidor Santex')
});

server.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
})