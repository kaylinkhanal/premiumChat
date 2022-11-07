const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password,filename } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    filename:req.file.filename
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Check for user email
//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid credentials");
//   }
// });

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
// const getMe = asyncHandler(async (req, res) => {
//   res.status(200).json(req.user);
// });

module.exports = {
  registerUser,
  //loginUser,
  //getMe,
};
