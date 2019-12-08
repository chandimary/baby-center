
const express = require("express");
// //requiring body passer to enable the js to access the elementes in the body from our pug files
// const bodyParser = require("body-parser")
const bodyParser = require("body-parser");

const path = require('path');//path enables
//requiring moose
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

app.get('/adminsignup', (req, res) => {
    res.render("adminsignup")
});

app.post('/adminsignup', (req, res) => {
    res.render("adminlogin")
});

app.get('/adminlogin', (req, res) => {
    res.render("adminlogin")
});

app.post('/adminlogin', (req, res) => {
    res.render("parentappointmentform")

});

app.get('/parentappointmentform', (req, res) => {
    res.render("parentappointmentform")

});
app.post('/parentappointmentform', (req, res) => {
    res.render("regesteredsitter")

});

app.get('/regesteredsitter', (req, res) => {
    res.render("regesteredsitter")

});

app.post('/regesteredsitter', (req, res) => {
    res.render("babytosit")

});

app.get('/babytosit', (req, res) => {
    res.render("babytosit")

});

app.post('/babytosit', (req, res) => {
    res.render("parentpayments")

});
app.get('/parentpayments', (req, res) => {
    res.render("parentpayments")

});

app.post('/parentpayments', (req, res) => {
    res.render("listofregisteredsitters")

});


app.get('/listofregistersitters', (req, res) => {
    res.render("listofregistersitters")

});

app.post('/listofregistersitters', (req, res) => {
    res.render("paymentlist")

});


app.get('/paymentlist', (req, res) => {
    res.render("paymentlist")

});

app.post('/paymentlist', (req, res) => {
    res.render("adminsdashboard")

});

app.get('/adminsdashboard', (req, res) => {
    res.render("adminsdashboard")

});

//how to connect files



//    app.get('/listofregistersitters',(req,res)=>{
//     res.render("paymentlist")

//     });


//sitters posts
app.get('/sitterlogin', (req, res) => {
    res.render("sitterlogin")

});

app.post('/sitterlogin', (req, res) => {
    res.render("sitbaby")

});

app.get('/sitbaby', (req, res) => {
    res.render("sittersdashboard")

});
app.post('/sitbaby', (req, res) => {
    res.render("sittersdashboard")
});

app.get('/sitterssdashboard', (req, res) => {
    res.render("sittersdashboard")

});
//end of sitters posts

//parents posts
app.get('/parentslogin', (req, res) => {
    res.render("parentslogin")

});
app.post('/parentslogin', (req, res) => {
    res.render("/parentappointmentform")

});

app.get('/parentsdashboard', (req, res) => {
    res.render("parentsdashboard")

});


//end of parent posts



app.get('/supervisorlogin', (req, res) => {
    res.render("supervisorlogin")

});
app.post('/supervisorlogin', (req, res) => {
    res.render("supervisors")

});









app.get('/aboutus', (req, res) => {
    res.render("aboutus")

});

app.get('/payment', (req, res) => {
    res.render("paymentlist")

});

app.get('/home', (req, res) => {
    res.render("home")

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


