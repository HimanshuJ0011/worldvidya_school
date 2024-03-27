const Student = require('../Models/registrationSchema');

const Reciept = async (req, res) => {
    const { mobileNo } = req.query; 
  
    try {
      const student = await Student.findOne({ mobileNo });
  
      if (!student) {
        return res.status(404).send('Student not found');
      }
  
     
      const html = `
        <div class="row">
                    <div class="column">
                        <h3>Student Information:</h3>
                        <p>
                            - Name:  ${student.firstName} ${student.lastName}<br /><br />
                            - Date of Birth:${student.dob}<br /><br />
                            - Father's Name: ${student.fatherName}<br /><br />
                            - Grade/Class:  ${student.standard}<br /><br />
                            - Admission Session: 2024-2025
                        </p>
                    </div>
                    <div class="column">
                        <h3>Fees Breakdown:</h3>
                        <p>
                            - Total Fees:  ${student.totalFees}<br /><br />
                            - Amount Paid: ${student.paidFees}<br /><br />
                            - Remaining Fee: ${student.remainingFees}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <h3>Payment Information:</h3>
                        <p>
                            - Payment Method: [Cash/Cheque/Card/Online Transfer]<br />
                            - Date of Payment: [Date]
                        </p>
                    </div>
                    <div class="column"></div>
                </div
      `;
  
      
      res.status(200).send(html);
    } catch (error) {
      console.error('Error fetching student data:', error);
      return res.status(500).send('Internal server error');
    }
};

module.exports = Reciept;
