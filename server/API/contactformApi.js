const express = require('express');
const contacts = express.Router();
const submitContactForm = require('../Controller/contactForm');

contacts.post('/contactform', submitContactForm);

module.exports = contacts;
