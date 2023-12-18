const employeeModel = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model'); 

const create = async (req, res, next) => { 
    try {
        const newEmployee = new EmployeeModel(req.body);
        const savedEmployee = await newEmployee.save();
        
        console.log(savedEmployee);

        res.status(201).json({
            message: 'Employee created',
            employee: savedEmployee
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const list = async (req, res, next) => { 
    try {
        var employees = await EmployeeModel.find({});
        res.status(200).json({ employees });
    } catch (error) {
        res.status(500).send("Error fetching employees!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}

const findById = async (req, res, next) => { 
    
}

const findByEmail = async (req, res, next) => { 
    
}

module.exports = {
    create, update, remove, findById, list, findByEmail
}