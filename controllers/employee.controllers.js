const employeeModel = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model'); 

const create = async (req, res, next) => { 
    try {
        console.log(req.body);
        const savedEmployee = await EmployeeModel.create(req.body);

        res.status(201).json({
            message: 'Employee created',
            employee: savedEmployee
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}

const findById = async (req, res, next) => { 
    
}

const list = async (req, res, next) => { 
    
}

const findByEmail = async (req, res, next) => { 
    
}

module.exports = {
    create, update, remove, findById, list, findByEmail
}