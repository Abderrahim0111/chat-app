const express = require("express");
const router = express.Router();
const {
  loginController,
  signUpController,
} = require("../controllers/userController");



router.post("/", loginController);
router.post("/signup", signUpController);

module.exports = router;
 