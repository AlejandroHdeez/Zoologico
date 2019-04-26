'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = Schema({
    nombre: String,
    tipo: String,
    edad: Number,
    nombreCientifico: String,
});

module.exports = mongoose.model('Animal', AnimalSchema);