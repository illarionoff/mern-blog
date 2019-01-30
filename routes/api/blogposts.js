const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Blogpost model
const Blogpost = require("../../Models/Blogpost");

//Blogpost Validation
const validateBlogpostInput = require("../../validation/blogpost");

// @route GET api/blogposts/test
// @desc Tests movies route
// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Blogposts works" });
});

// @route GET api/blogposts/all
// @desc Return all movies
// @access Private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json(req.user);
    res.json({
      blogposts: req.user.blogposts
    });
  }
);

module.exports = router;
