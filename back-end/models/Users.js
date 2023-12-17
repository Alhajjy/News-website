const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
});

const Usermodel = mongoose.model("writers", UserSchema);
module.exports = Usermodel;
