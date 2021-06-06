const router = require("express").Router();
const User = require("../models/User");

//***REGISTER**//
// this is going to fetch data, connect to database
// and trey to create. a new user
//this all gonna take sum time
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
