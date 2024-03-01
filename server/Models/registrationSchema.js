const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  
    firstName: { 
        type: String, 
        required: true 
    },

    lastName: { 
        type: String, 
        required: true 
    },

    dob: { 
        type: Date, 
        required: true 
    },

    motherName: { 
        type: String, 
        required: true 
    },

    fatherName: { 
        type: String, 
        required: true 
    },
    
    mobileNo: { 
        type: String, 
        required: true 
    },
  
    email: { 
        type: String,
        // required: true 
    },
  
    standard: { 
        type: Number, 
        required: true 
    },
    
    board: { 
        type: String, 
        required: true 
    },
  
    lastSchool: { 
        type: String, 
        required: true 
    },
  
    stream: { 
        type: String 
    },
  
    totalFees: { 
        type: Number, 
        required: true 
    },
  
    paidFees: { 
        type: Number, 
        required: true 
    },
  
    remainingFees: { 
        type: Number, 
        required: true 
    },
});


const Student = mongoose.model('StudentRegistration', registrationSchema);

module.exports = Student;