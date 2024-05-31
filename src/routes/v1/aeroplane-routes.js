const express = require("express");
const router = express.Router();
const {aeroplaneController} = require("../../controllers");

router.post('/create',aeroplaneController.createAeroplane);

module.exports = router;