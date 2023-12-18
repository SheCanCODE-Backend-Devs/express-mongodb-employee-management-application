require('dotenv').config();

const express = require('express');
const employeeRoutes = require('./routes/employee.routes');
const allRoutes = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/em', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});