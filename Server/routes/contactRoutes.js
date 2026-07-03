const express = require("express");
const { saveContact } = require("../controllers/contactController");

const router = express.Router();

// Save Contact Message
router.post("/", saveContact);

module.exports = router;
