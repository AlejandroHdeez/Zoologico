'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoologico', { useNewUrlParser:true })
    .then((err, res) => {
        console.log('Conexion a la base de datos a sido realizada exitosamente');

        app.listen(port,() => {
            console.log("El servidor local de Node y Express está corriendo");
        });

    })
    

    .catch(err => console.log(err));