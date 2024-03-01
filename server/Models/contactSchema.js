const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
        trim: true
    },

    mobile: {
        type: Number,
        required: true,
        trim: true
    },

    subject: {
        type: String,
        required: true,
        trim: true,
    },
    
    message: {
        type: String,
        required: true,
        trim: true,
    },

});


const StudentSchema = mongoose.model('Contacts', contactSchema);

module.exports = StudentSchema;
