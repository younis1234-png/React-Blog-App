const router = require("express").Router();
const User = require("../models/User");
// not to show our password
const bcrypt = require("bcrypt");

//***REGISTER**//
// this is going to fetch data, connect to database
// and trey to create. a new user
//this all gonna take sum time
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasPasswor = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hasPasswor,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

module.exports = router;
