const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name : String,
    phoneNumber : Number,
    message : String,
});

module.exports = mongoose.model("Contact", contactSchema);
