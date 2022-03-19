const express = require("express");
const { UssdController, getAllInput } = require("../controller/ussdController");

const router = express.Router();

router.post("/", UssdController);
// router.get("/", getAllInput);

module.exports = router;
