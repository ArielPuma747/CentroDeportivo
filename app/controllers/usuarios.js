// Dependencies
var mongoose        = require('mongoose');
var Usuario            = require('../models/usuario.js');

//GET - Return all registers
exports.findAll = function(req, res) {
	Usuario.find(function(err, usuarios) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(usuarios);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	Usuario.findById(req.params.id, function(err, usuario) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(usuario);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	var usuario = new Usuario({
	    nombre: req.body.nombre,
	    apellido: req.body.apellido,
	    carnet:  req.body.carnet
	});
	usuario.save(function(err, usuario) {
		if(err) return res.status(500).send(err.message);
    	res.status(200).json(usuario);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	Usuario.findById(req.params.id, function(err, usuario) {
		var usuario = new Usuario({
	    	name: req.body.name
		});
		usuario.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).json(usuario);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	Usuario.findById(req.params.id, function(err, usuario) {
		usuario.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		});
	});
};