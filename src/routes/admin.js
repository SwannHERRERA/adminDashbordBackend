const express = require("express");

const router = express.Router();

router.get("/admin", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>Admin space</h1>");
  // res.redirect("/");
});

module.exports = router;
