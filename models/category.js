const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: Number,
  position: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("categories", categorySchema);
