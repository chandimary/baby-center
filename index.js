
const express = require("express");

// //requiring body passer to enable the js to access the elementes in the body from our pug files
// const bodyParser = require("body-parser")
const bodyParser = require("body-parser");

//requiring the route files
const appointment = require('./routes/appointmentRoute')
// ... call to require('express') ...
const {check, validationResult} = require('express-validator/check');

const path = require('path');//path enables
// const mongoose = require("mongoose");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
const db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

const app = express()

app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'views'));
// app.use(express.static('public'));
// //create a handler to store all express features

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
//
app.use('/appointments' , appointment)


app.get('/', (req, res) => {
    res.render('index');
});

// Signup for Admin
app.post('/signup', function (req, res) {
    const email = req.body.name;
    const pass = req.body.password;
    const phone = req.body.phone;

    const data = {
        "email": email,
        "password": pass,
        "phone": phone,
    }
    db.collection('details').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

        // TODO: Redirect to the Login Page

        res.redirect('adminlogin');

    });

    res.redirect('signup');
})


app.get('/aboutus', (req, res) => {
    res.render("aboutus")
});

app.get('/login', (req, res) => {
    res.render("login")
});

app.post('/signup', (req, res) => {
    res.render("signup")
});


app.get('/listofregistersitters', (req, res) => {
    res.render("listofregistersitters")

});


app.get('/adminsdashboard', (req, res) => {
    res.render("adminsdashboard")

});

app.get('/babies', (req, res) => {
    res.render("babies")


app.get('/sittersdashboard', (req, res) => {
    res.render("sittersdashboard")

});


app.get('/listofappointment', (req, res) => {
    res.render("listofappointment")

});

app.get('/listofpayments', (req, res) => {
    res.render("listofpayments")

});



app.get('/register3', (req, res) => {
    res.render("layout")

});



app.get('/supervisorsdashboard', (req, res) => {
    res.render("supervisorsdashboard")

});


app.listen(3000, () => {
    console.log("server listening at port 3000");
});

})
