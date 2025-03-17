const express = require("express");
const { registerController } = require("../controllers/userController");

const router = express.router();

router.post("/register", registerController);
router.post("/login", )