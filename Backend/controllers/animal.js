'use strict'

var mongoose = require('mongoose');
var Animal = require('../models/animal');


// ==================== GUARDAR ANIMALES ======================= //

function guardarAnimales(req, res){
    var animal = new Animal();
    var params = req.body;
    if(params.nombre && params.tipo && params.edad && params.nombreCientifico){
        animal.nombre = params.nombre;
        animal.tipo = params.tipo;
        animal.edad = params.edad;
        animal.nombreCientifico = params.nombreCientifico;

        animal.save((err, animalSave)=>{
            if(err){
                res.status(404).send({message: 'Error general al guardar los datos'});
            }else{
                if(!animalSave){
                    res.status(500).send({message: 'Error, no se guardo en la BD'});
                }else{
                    res.status(200).send({animalSave});
                }
            }
        });
    }
}


// ==================== LISTAR ANIMALES ======================= //

    function listarAnimales(req, res){
        Animal.find({}, (err, animals)=>{
            if(err){
                res.status(500).send({message: 'Error al traer los animales'});
            }else{
                res.status(200).send({animals});
            }
        });
    }


// ==================== BUSCAR ANIMALES ======================= //

function buscarAnimales(req,res){
    var params = req.body;
    var nombre = params.nombre
    var nombreCientifico = params.nombreCientifico
    var tipo = params.tipo

if(nombre){
    Animal.find({nombre},(err, nombre)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido buscar al animal'});
        }else{
            res.status(200).send({nombre});
            }
        })
    }else if(nombreCientifico){
        Animal.find({nombreCientifico},(err, nombre)=>{
            if(err){
                res.status(500).send({message: 'No se ha podido buscar al animal'});
            }else{
                res.status(200).send({nombre});
            }
        })
    }else if(tipo){
        Animal.find({tipo},(err, nombre)=>{
            if(err){
                res.status(500).send({message: 'No se ha podido buscar al animal'});
            }else{
                res.status(200).send({nombre});
            }
        })
    }
}
    


module.exports = {
    listarAnimales,
    guardarAnimales,
    buscarAnimales
};