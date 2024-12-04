const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../Models/User.js");

router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    console.log(req.body);
    const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);
    req.flash("success",'Welcome to Our Cause!"Thank you for joining us! Together, we’ll make a lasting difference."');
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      // req.flash("success",'Welcome to Our Cause!"Thank you for joining us! Together, we’ll make a lasting difference."');
      res.redirect("/home#homeSection");
    });
  } catch (e) {
    // req.flash("error",e.message);
    console.log(e);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login");
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/home#homeSection",
  failureRedirect: "/login",
}));


module.exports = router;
