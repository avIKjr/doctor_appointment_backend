require("dotenv").config();
const express = require("express");
var cors = require("cors");
const routes = require("./routes/router.js");
const connectDB = require("./config/db.js");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());
app.use("", routes);

connectDB();
//connecting with the port
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server running at: ${PORT}`);
});
