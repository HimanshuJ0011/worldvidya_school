const Student = require('../Models/registrationSchema');

const Reciept = async (req, res) => {
    const { mobileNo } = req.body; 
  
    try {
      const student = await Student.findOne({ mobileNo });
  
      if (!student) {
        return res.status(404).send('Student not found');
      }
  
     
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Student Details</title>
        </head>
        <body>
          <h2>Student Details</h2>
          <p>Name: ${student.firstName} ${student.lastName}</p>
          <p>Date of Birth: ${student.dob}</p>
          <p>Mother's Name: ${student.motherName}</p>
          <p>Father's Name: ${student.fatherName}</p>
          <p>Mobile No: ${student.mobileNo}</p>
          <p>Email: ${student.email}</p>
          <p>Standard: ${student.standard}</p>
          <p>Board: ${student.board}</p>
          <p>Last School: ${student.lastSchool}</p>
          <p>Stream: ${student.stream}</p>
          <p>Total Fees: ${student.totalFees}</p>
          <p>Paid Fees: ${student.paidFees}</p>
          <p>Remaining Fees: ${student.remainingFees}</p>
        </body>
        </html>
      `;
  
      
      res.status(200).send(html);
    } catch (error) {
      console.error('Error fetching student data:', error);
      return res.status(500).send('Internal server error');
    }
};

module.exports = Reciept;
