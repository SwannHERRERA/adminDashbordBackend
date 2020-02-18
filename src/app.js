require("dotenv").config();
const express = require("express");
const port = process.env.PORT;

const app = express();

const adminRoutes = require("./routers/admin");

app.use(express.json());
app.use(adminRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
