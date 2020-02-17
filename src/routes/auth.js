const express = require("express");

const router = express.Router();

router.post("/auth/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin");
});

router.get("/auth/logout", (req, res, next) => {
  console.log(req.body);
  res.redirect("/auth/login");
});

module.exports = router;
