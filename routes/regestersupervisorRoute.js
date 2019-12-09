const router = require("express").Router();
const supervisor = require("../models/regester.js");

router.post("/login", async (req, res) => {
  //   const students = await Students.find();
  try {
    const supervisor = new supervisor(req.body);
    await supervisor.save();
      console.log("supervisors saved");
    res.send("successfully regestered");
  } catch (error) {
    res.send("An Error occured");
  }
});

router.get("/", (req, res) => {
  res.render("");
});

module.exports = router;



