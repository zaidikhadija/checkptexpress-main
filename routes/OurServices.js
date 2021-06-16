const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "OurServices.html"));
});
module.exports = router;
