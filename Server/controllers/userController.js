const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password,
    token: generateToken(),
  });
  if (user) {
    res.status(201).json({
      name: user.name,
      email: user.email,
      token: user.token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Check for user email
  const user = await User.findOne({ email });

  if (user) {
    res.json({
      name: user.name,
      email: user.email,
      token: user.token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = {
  registerUser,
  loginUser,
  //getMe,
};
