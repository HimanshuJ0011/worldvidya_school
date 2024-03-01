const Student = require('../Models/registrationSchema');

const registerStudent = async (req, res) => {
  try {
    const {firstName, lastName, dob, motherName,  fatherName, mobileNo, email, standard, board, lastSchool, stream, totalFees, paidFees, remainingFees} = req.body;
    const newRegistration = new Student({ firstName, lastName, dob, motherName,  fatherName, mobileNo, email, standard, board, lastSchool, stream, totalFees, paidFees, remainingFees });
    await newRegistration.save();
    res.status(201).send('Contact form submitted successfully!');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = registerStudent;
