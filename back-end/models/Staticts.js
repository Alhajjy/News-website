const mongoose = require("mongoose");

const StaticsSchema = new mongoose.Schema({
    about_text: { type: String },
    quote: { type: Object },
});

const StaticsModel = mongoose.model("statics", StaticsSchema);
module.exports = StaticsModel;
