const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String },
    phone: { required: true, type: String },
    gender: { required: true, type: String },
    nationalId: { required: true, type: String },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["HR", "MANAGER","IT_ADMIN","EMPLOYEE"],
            message: "{value} is not a valid role",
        }
    },
    createDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('employee', EmployeeSchema);