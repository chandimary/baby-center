

const mongoose = require("mongoose");

//schema definition
var nameSchema = new mongoose.Schema({
    firstname:{
        type:String,
    required:'Please Enter first name'},
    lastname:String,
    City:String,
    age:Number,
});


//schema definition for the validation of the login form
var registerSchema = new mongoose.Schema({
    username:{
        type:String,
    required:'Please Enter username'},


    password:{ type:String,
     required:   "Login Failed"}
});

//hasging the password before saving it to data base
registerSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    console.log(this.password);
})

//authenticate input against database
registerSchema.statics.authenticate = async function (username, password) {
    const user = await this.findOne({ username: username })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
        return user;
    }
}





//code for exporting module
module.exports = mongoose.model("User", nameSchema);






