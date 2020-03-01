const express = require("express");
const Chat = require("../models/chat");
const auth = require("../middleware/auth");

const router = express.Router();
