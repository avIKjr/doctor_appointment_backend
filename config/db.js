require("dotenv").config();
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://K9YeNLUwSeThYyv1:K9YeNLUwSeThYyv1@cluster0.lchubc6.mongodb.net/DoctorAppointment?retryWrites=true&w=majority";
const db = process.env.URI || uri;
const connectDB = async () => {
  try {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Success");
      });
    console.log("Connected With DB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
