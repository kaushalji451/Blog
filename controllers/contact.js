const Contact = require("../models/contact");

module.exports.renderContactForm = (req,res)=>{
    res.render("./contact/contact.ejs");
  };

  module.exports.postContact = async(req,res)=>{
    let newContact = new Contact(req.body.contact);
    await newContact.save();
    req.flash("success","you message was saved");
    res.redirect("/blogs");
  };