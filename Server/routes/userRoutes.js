const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const users = require("../models/userModel")

router.post("/", registerUser);
// router.post("/login", loginUser);

router.get("/users", async(req, res) => {
  const data = await users.find({})
  res.json({usersList: data})
})

module.exports = router;
