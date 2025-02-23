const User = require("../models/user");

// signup get route
module.exports.renderSingupForm = (req, res) => {
  res.render("users/signup.ejs");
};
// signup post route
module.exports.newUserSignup = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);

    req.login(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Ancient Glories!");
      res.redirect("/blogs");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};
// login get route
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};
// login post route
module.exports.login = async (req, res) => {
  req.flash("success", "welcom back to Ancientglories");
  let redirectUrl = res.locals.redirectUrl || "/blogs";
  res.redirect(redirectUrl);
};
// logout get route
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next();
    }
    req.flash("success", "you are logged out ");
    res.redirect("/blogs");
  });
};
