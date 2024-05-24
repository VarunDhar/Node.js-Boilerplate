const express = require("express");
const router = express.Router();
const {homepage} = require("../../controllers");


router.get('/home',homepage);

module.exports = router;