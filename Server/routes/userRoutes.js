const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const users = require("../models/userModel")

//multer file image upload
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/src/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("avatar");


router.post("/", upload,registerUser);

router.get("/users", async(req, res) => {
  const data = await users.find({})
  res.json({usersList: data})
})

module.exports = router;
