
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apointmentlistSchema = new Schema({
  name: String,
  childname:String,
  id: String,
  phone: Number,
  email:String,
  club:String,
});

apointmentSchema.pre('save',function(next){
  this.name = bcrypt.hashSync(this.name, 45);
  next();
  console.log(this.name);
});
//authenticate input against database
loginSchema.statics.authenticate = async function (name, childname,id,phone, email,club) {
  const user = await this.findOne({ email: email })
  const user = await this.findOne({ name: name })
  const user = await this.findOne({ childname: childname })
  const user = await this.findOne({ id: id })
  const user = await this.findOne({ phone:phone })
  if (!user) {
      throw new Error('User not found.');
  }
  const match = await bcrypt.compare(password, user.password)
  if (match) {
      return user;
  }
}

const apointmentlistModel = mongoose.model("Apointmentlist", apointmentlistSchema);
module.exports = apointmentlistModel;