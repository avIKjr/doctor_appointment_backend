const express = require("express");
const categories = require("../models/category");
const doctors = require("../models/doctors");

const routes = express.Router();

//checked if its working or not
routes.get("/", (req, res) => {
  res.send("Router is Working");
});
//getting all the categories data
routes.get("/allCategories", async (req, res) => {
  const data = await categories.find({});
  res.send(data);
});
//getting all the doctors data
routes.get("/allDoctors", async (req, res) => {
  const data = await doctors.find({});
  res.send(data);
});
//getting all doctors based on position
routes.get("/getAllDoctorsBasedOnDept/:position", async (req, res) => {
  const data = await doctors.find({
    position: req.params.position,
  });
  res.send(data);
});
module.exports = routes;
