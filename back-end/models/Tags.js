const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
    tag: { type: String },
    category: { type: String },
});

const tagModel = mongoose.model("tags", tagSchema);
module.exports = tagModel;
