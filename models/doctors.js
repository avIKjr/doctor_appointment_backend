const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  id: Number,
  position: String,
  doctor: [
    {
      name: String,
      image: String,
      experience: Number,
      address: {
        city: String,
        clinic: String,
      },
      fees: Number,
      ratings: Number,
      patient_count: Number,
      not_available: Number,
    },
  ],
});

module.exports = mongoose.model("doctors", doctorsSchema);
