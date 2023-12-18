const express = require('express');
const employeeRoutes = express.Router();
const { create, findByEmail, findById, list, remove, update  } = require('../controllers/employee.controllers');

employeeRoutes.get('/list', list);
employeeRoutes.post('/add', create);
employeeRoutes.get('/findById/:id', findById);
employeeRoutes.get('/findByEmail/:email', findByEmail);
employeeRoutes.put('/update', update);
employeeRoutes.delete('/delete', remove);

module.exports = employeeRoutes;