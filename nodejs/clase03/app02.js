var express = require('express');
var app = express();
var booksController = require('./controllers/books');

app.use(express.json());

app.listen(3000, function() {
    console.log("App web express funcionando");
})