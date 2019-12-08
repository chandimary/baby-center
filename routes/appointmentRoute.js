const router = require("express").Router();
const Appointment = require("../models/appointment.js");

router.post("/", async (req, res) => {
  //   const students = await Students.find();
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
      console.log("student saved");
    res.send("new appointment created successfully");
  } catch (error) {
    res.send("An Error occured");
  }
});

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
