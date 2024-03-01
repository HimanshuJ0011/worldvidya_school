const express = require('express');
const reciept = express.Router();

const recieptDetail = require('../Controller/reciept');

reciept.get("/reciept",recieptDetail);

module.exports = reciept;