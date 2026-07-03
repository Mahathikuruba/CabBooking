const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("🔥 ADMIN ROUTE HIT");
  res.send("ADMIN WORKING");
});

module.exports = router;
