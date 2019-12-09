const router = require("express").Router();
const login = require("../models/login.js");

router.post("/login", async (req, res) => {
  //   const students = await Students.find();
  try {
    const login = new login(req.body);
    await login.save();
      console.log("login saved");
    res.send("login was successfully");
  } catch (error) {
    res.send("An Error occured");
  }
});

// // router.get("/", (req, res) => {
// //   res.render("");
// });

module.exports = router;