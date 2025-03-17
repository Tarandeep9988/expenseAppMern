const express = require("express");
const { registerController, loginController, setAvatarController } = require("../controllers/userController");

const router = express.router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/setAvatar/:id", setAvatarController);
