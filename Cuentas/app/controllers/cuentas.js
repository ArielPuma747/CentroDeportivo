// Dependencies
var mongoose        = require('mongoose');
var Cuenta            = require('../models/cuenta.js');

//GET - Return all registers
exports.findAll = function(req, res) {
	Cuenta.find(function(err, cuentas) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(cuentas);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	Cuenta.findById(req.params.id, function(err, cuenta) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(cuenta);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	var cuenta = new Cuenta({
	    name: req.body.name
	});
	Cuenta.save(function(err, cuenta) {
		if(err) return res.status(500).send(err.message);
    	res.status(200).json(cuenta);
	});
};
/*
//PUT - Update a register already exists
exports.update = function(req, res) {
	Client.findById(req.params.id, function(err, client) {
		var client = new Client({
	    	name: req.body.name
		});
		client.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).json(client);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	Client.findById(req.params.id, function(err, client) {
		client.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		});
	});
};
*/