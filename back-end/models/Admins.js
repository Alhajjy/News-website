const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    data: { type: Object },
});

const AdminModel = mongoose.model("admins", AdminSchema);
module.exports = AdminModel;
