const express = require("express");
const { UssdController } = require("../controller/ussdController");

const router = express.Router();

router.post("/", UssdController);

module.exports = router;
