const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  
    fname: {
        type: String,
        required: true,
        trim: true
    },

    mobile: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },
    
   
});


const userSchema = mongoose.model('newusers', signupSchema);

module.exports = userSchema;
