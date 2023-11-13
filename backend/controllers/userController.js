const express = require("express");
const User = require("../models/userSchema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });

    if (user == null) {
      return res.json({ emailNotFound: "username not found, try to register" });
    }
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
        res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
        return res.json({
          _id: user._id,
          name: user.name,
          token: token,
        });
      }
      if (!match) {
        return res.json({
          wrongPassword: `wrong password for ${req.body.name}`,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const signUpController = async (req, res) => {
  try {
    //check for all fields
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.json({ notAllFields: "All necessary input fields have not been filled"});
    }

    //pre-existing user
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.json({ userExist: "user already exists"});
    }

    //username already taken
    const usernameExist = await User.findOne({ name: req.body.name });
    if (usernameExist) {
      return res.json({ usernameTaken: "username already taken"});
    }

    //creat an entry in db
    const user = await User.create(req.body);
    if (user) {
      var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res.cookie("jwt", token, {  maxAge: 86400000 });
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginController,
  signUpController,
};
