const express = require('express');
const login = express.Router();

const LoginDetail = require('../Controller/login');

login.post("/signin",LoginDetail);

module.exports = login;