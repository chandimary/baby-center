

const mongoose = require("mongoose");

//schema definition
var nameSchema = new mongoose.Schema({
    name:{
        type:String,
    required:'Please Enter name'},
    email:String,
    club:String,
    supervisor:String,
});


//schema definition for the validation of the login form
var registerSchema = new mongoose.Schema({
    name:{
        type:String,
    required:'Please Enter username'},


    email:{ 
        type:String,
     required:   "enter email"},

     club:{
type:String,
required: "assign club"
     },

     supervisor:{
        type:String,
        required: "name of the supervisor"
             },
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






