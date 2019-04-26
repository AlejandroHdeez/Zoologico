'use strict'

var mongoose = require('mongoose');
var Encargado = require('../models/encargado');
var Animal = require('../models/animal')


function prueba(req, res){
    res.status(200).send({
        message: 'Probando el controlador de teacher'
    });
}

// ==================== GUARDAR ENCARGADOS ======================= //

function guardarEncargados(req, res){
    var encargado = new Encargado();
    var params = req.body;
    if(params.nombre && params.cargo && params.celular){
        encargado.nombre = params.nombre;
        encargado.cargo = params.cargo;
        encargado.celular = params.celular;

        encargado.save((err, encargadoSave)=>{
            if(err){
                res.status(404).send({message: 'Error general al guardar los datos'});
            }else{
                if(!encargadoSave){
                    res.status(500).send({message: 'Error, no se guardo en la BD'});
                }else{
                    res.status(200).send({encargadoSave});
                }
            }
        });
    }
}


    // ==================== LISTAR ENCARGADOS ======================= //

    function listarEncargados(req, res){
        Encargado.find({}, (err, encargados)=>{
            if(err){
                res.status(500).send({message: 'Error al traer los profesores'});
            }else{
                res.status(200).send({encargados});
            }
        });
    }


// ==================== BUSCAR ENCARGADOS ======================= //

function buscarEncargado(req,res){
    var params = req.body;
    var nombre = params.nombre
    var encargadoId = req.params.idencargado;

    Encargado.find({nombre},(err, encargado)=>{
        if(err){
            res.status(500).send({message: 'No se ha podido buscar al encargado'});
        }else{
            Animal.findOne({_id: encargadoId}, (err, issetAnimales)=>{
                if(err){
                    res.status(500).send({message: 'No encontramos animales a supervisar por este encargado'});
                }else{
                    if(!issetAnimales){
                        res.status(500).send({message: 'Error al mostrar los animales!'});
                    }else{
                        res.status(200).send({encargado, Animal: issetAnimales});
                    }
                }
            }) 
        }
    })
}



function guardarAnimalesConEncargado(req, res) {
    var idEncargado = req.params.id;
    var params = req.body;

    if (params.animal) {
      Encargado.findById(idEncargado, (err, actualizar) => {
        if (err) {
          res.status(500).send({ message: 'Error al buscar' });
        } else {
          if (!actualizar) {
            res.status(404).send({ message: 'No se ha podido buscar' });
          } else {
            if (actualizar) {
              Animal.findById(params.animal, (err, animal) => {
                if (err) {
                  res.stat(404).send({ message: 'Error al buscar' })
                } else {
                  if (animal) {
                    actualizar.animalesaCargo.push({ animal });
                    actualizar.save()
                    res.status(200).send({ params: actualizar })
                  }
                }
              });
            }
          }
        }
      });
    } else {
      res.status(404).send({ message: 'Introducir los campos' })
    }
  }



module.exports = {
    prueba,
    listarEncargados,
    guardarEncargados,
    buscarEncargado,
    guardarAnimalesConEncargado
};