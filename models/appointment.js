var mongoose = require("mongoose");
const Schema = mongoose.Schema;
//an intance of a schema
var appointmentSchema = new mongoose.Schema({
  name:{type:String,
  required: "Enter the parent's name"
  
  },
childname:{
type:String,
required: "Enter the childs name"

},
id:{
  type:String,
  required: "Enter the Id given"
},

club:{
  type:String,
  required: "Enter the club given"
},

healthproblem:{
  type:String,
  required: "what problem is the baby having"
},
describe:{
type:String,
required:"describe the conditions"
},

number:{
type:Number
},

})



const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel;
