const Contact = require('../Models/contactSchema');

const submitContactForm = async (req, res) => {
  try {
    const { name, mobile, subject, message } = req.body;
    const newContact = new Contact({ name, mobile, subject, message });
    await newContact.save();
    res.status(201).send('Contact form submitted successfully!');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = submitContactForm;
