const express = require('express');
const registration = express.Router();
const registrationForm = require('../Controller/registrationform');

registration.post('/registrationform', registrationForm);

module.exports = registration;
