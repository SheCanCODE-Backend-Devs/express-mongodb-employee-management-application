const express = require('express');
const allRoutes = express.Router();

const employeeRoutes = require('./employee.routes');
// const userRoutes = require('./user.routes');

allRoutes.use('/employee', employeeRoutes);
// allRoutes.use('/user', userRoutes);

module.exports = allRoutes;
