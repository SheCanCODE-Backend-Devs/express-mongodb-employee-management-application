const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const EmployeeSchema = new Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String },
    phone: { required: true, type: String },
    gender: { required: true, type: String },
    nationalId: { required: true, type: String },
    role: {
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
    updateTime: { required: true, type: Date },
});

module.exports = mongoose.model('employee', EmployeeSchema);