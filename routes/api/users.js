const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// User model
const User = require("../../Models/User");

// JWT Secret or Key
const secret = require("../../config/keys").secretOrKey;

// @route POST api/users/register
// @desc Register new user
// @access public
router.post("/register", (req, res) => {
  // Validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check if email already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user / Return JWT
// @access public
router.post("/login", (req, res) => {
  // Validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email })
    .then(user => {
      // Check for user
      if (!user) {
        return res.status(404).json({ email: "User not found" });
      }
      // Check password
      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          // Create JWT payload
          const payload = {
            id: user._id
          };
          // Sign Token
          jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          return res.status(400).json({ password: "password incorrect" });
        }
      });
    })
    .catch(err => console.log(err));
});

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ email: req.user.email });
  }
);

module.exports = router;
