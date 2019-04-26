'use strict'

var express = require('express');
var AnimalController = require('../controllers/animal');
var EncargadoController = require('../controllers/encargado')

var api = express.Router();

// ===================== R U T A S    E N C A R G A D O S ==============//

api.get('/listarEncargados', EncargadoController.listarEncargados);
api.post('/saveEncargados', EncargadoController.guardarEncargados);
api.post('/saveAnimalesEncargados/:id', EncargadoController.guardarAnimalesConEncargado);
api.post('/buscarEncargados/:idencargado', EncargadoController.buscarEncargado);

// ===================== R U T A S    A N I M A L E S ==============//

api.get('/listarAnimales', AnimalController.listarAnimales);
api.post('/saveAnimales', AnimalController.guardarAnimales);
api.post('/buscarAnimales',AnimalController.buscarAnimales);

module.exports = api;