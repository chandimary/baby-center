var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  name: String,
 
  
});

const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel;
