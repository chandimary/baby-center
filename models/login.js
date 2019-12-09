

const mongoose = require("mongoose");

//schema definition for the validation of the login form
var loginSchema = new mongoose.Schema({
    email:{
        type:String,
    required:'Please Enter username'},

    password:{ type:String,
     required:   "please enter your password"}
});
//hasging the password before saving it to data base
loginSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    console.log(this.password);
});
//authenticate input against database
loginSchema.statics.authenticate = async function (email, password) {
    const user = await this.findOne({ email: email })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
        return user;
    }
}

const loginModel = mongoose.model("login", loginSchema);
//code for exporting module
module.exports = mongoose.model("login", loginSchema);




