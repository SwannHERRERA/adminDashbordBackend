const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("<h1>toto</h1>");
});

app.use(adminRoutes);
app.use(authRoutes);

app.listen(port);
