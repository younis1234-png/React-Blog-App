const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//***REGISTER**//
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
router.post("/login", async (req, res) => {
  try {
    //user validation
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong cerdentials");
    // password validation
    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong cerdentials");

    //not to send the password but the other props
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
