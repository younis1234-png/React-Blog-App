const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//***UPDATE USER**//
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          // set everything in our req.body
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    res.status(401).json("You can update only your account");
  }
});

//***DELETE USER**//
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
      try {
          
      } catch (error) {
          
      }
    try {

      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been delete");
    } catch (error) {}
  } else {
    res.status(401).json("You can only delete only your account");
  }
});

module.exports = router;
