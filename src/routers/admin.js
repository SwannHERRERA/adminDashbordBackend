const express = require("express");
const Admin = require("../models/admin");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/admins", async (req, res) => {
  // Create a new admin
  console.log("create new admin");
  try {
    const admin = new Admin(req.body);
    await admin.save();
    const token = await admin.generateAuthToken();
    console.log(token);
    res.status(201).send({ admin, token });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.post("/admins/login", async (req, res) => {
  //Login a registered admin
  try {
    const { email, password } = req.body;
    const admin = await Admin.findByCredentials(email, password);
    if (!admin) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await Admin.generateAuthToken();
    res.send({ admin, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/admins/me", auth, async (req, res) => {
  // View logged in admin profile
  res.send(req.admin);
});

router.post("/admins/me/logout", auth, async (req, res) => {
  // Log admin out of the application
  try {
    req.admin.tokens = req.admin.tokens.filter(token => {
      return token.token != req.token;
    });
    await req.admin.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/admins/me/logoutall", auth, async (req, res) => {
  // Log admin out of all devices
  try {
    req.admin.tokens.splice(0, req.admin.tokens.length);
    await req.admin.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
