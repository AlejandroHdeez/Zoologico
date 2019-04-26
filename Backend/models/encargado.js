'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EncargadoSchema = Schema({
    nombre: String,
    cargo: String,
    celular: Number,
    animalesaCargo: [{}]
});

module.exports = mongoose.model('Encargado', EncargadoSchema);