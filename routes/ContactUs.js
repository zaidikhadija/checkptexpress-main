const express = require("express");
const path = require("path");
const router = express.Router();
router.use("/contact", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "..", "public", "ContactUs.html"));
});
module.exports = router;
