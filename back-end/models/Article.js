const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: { type: String },
    article: { type: String },
});

const Articlemodel = mongoose.model("articles", ArticleSchema);
module.exports = Articlemodel;
