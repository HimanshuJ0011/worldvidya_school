const express = require('express');
const signup = express.Router();

const SignupDetail = require('../Controller/signup');

signup.post("/signup",SignupDetail);

module.exports = signup;