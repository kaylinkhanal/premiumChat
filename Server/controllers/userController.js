const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const bcrypt = require("bcryptjs");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
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



module.exports = {
  registerUser
};
