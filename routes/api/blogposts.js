const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Blogpost model
const Blogpost = require("../../Models/Blogpost");
const User = require("../../Models/User");

//Blogpost Validation
const validateBlogpostInput = require("../../validation/blogpost");

// @route GET api/blogposts/test
// @desc Tests blogposts route
// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Blogposts works" });
});

// @route GET api/blogposts/
// @desc Return all blogposts
// @access Public
router.get("/", (req, res) => {
  Blogpost.find()
    .sort({ date: -1 })
    .then(blogposts => res.json(blogposts))
    .catch(err =>
      res.status(404).json({ noblogpostsfound: "No blogposts found" })
    );
});

// @route GET api/blogposts/:id
// @desc Return a blogpost by id
// @access Public
router.get("/:id", (req, res) => {
  Blogpost.findById(req.params.id)
    .then(blogpost => res.json(blogpost))
    .catch(err =>
      res.status(404).json({ noblogpostfound: "No blogpost found" })
    );
});

// @route DELETE api/blogposts/:id
// @desc Delete a blogpost by id
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Blogpost.findById(req.params.id).then(blogpost => {
      if (blogpost.user.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ notauthorized: "User is not authorized" });
      }
      blogpost
        .remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ postnotfound: "post not found" }));
    });
  }
);

// @route PUT api/blogposts/:id
// @desc Edit a blogpost by id
// @access Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const updatedBlogpost = {};
    if (req.body.title) updatedBlogpost.title = req.body.title;
    if (req.body.body) updatedBlogpost.body = req.body.body;
    if (req.body.tags) updatedBlogpost.tags = req.body.tags.split(",");

    Blogpost.findByIdAndUpdate(
      req.params.id,
      {
        $set: updatedBlogpost
      },
      { new: true }
    )
      .then(blogpost => {
        if (blogpost.user.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ notauthorized: "User is not authorized" });
        }

        blogpost
          .save()
          .then(blogpost => res.json(blogpost))
          .catch(err => console.log(err));
      })
      .catch(err => res.status(404).json({ nopostfound: "No post found" }));
  }
);

// @route POST api/blogposts
// @desc Add new blogpost
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBlogpostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newTags = req.body.tags.split(",");

    const newBlogpost = new Blogpost({
      title: req.body.title,
      body: req.body.body,
      tags: newTags,
      user: req.user.id
    });

    newBlogpost
      .save()
      .then(blogpost => res.json(blogpost))
      .catch(err => console.log(err));
  }
);

module.exports = router;
