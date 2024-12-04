const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const blockchain = require("./Models/BlockChain.js");
const donation= require("./Models/Donation.js");
const donor = require("./Models/Donor.js");
const User = require("./Models/User.js");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");


const userRouter = require("./routes/user.js");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const sessionOptions = {
    secret : "kbsahsdhjwamnckald",
    resave : false,
    saveUninitialized : true,
    // cookie : {
    //     expires : Date.now()+1000*60*60*24*3,
    //     maxAge : 1000*60*60*24*3,
    //     httpOnly : true,
    // }
};

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());  //store user info
passport.deserializeUser(User.deserializeUser()); //remove user info



const url = "mongodb://127.0.0.1:27017/BlockCharity";
main().then(()=>{
    console.log("Connected to Database");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect(url);
}

app.use("/programs",(req,res)=>{
    res.render("listings/programs");
});

app.use("/donationForm",(req,res)=>{
    res.render("includes/donationForm");
});

app.use("/home",(req,res)=>{
    res.render("layouts/boilerplate.ejs");
});
// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// });

app.use("/",userRouter);

// app.get("/signup",(req,res)=>{
//     res.render("users/signup1");
// });

// app.post("/signup",async(req, res)=>{
//     let {username,email,password} = req.body;
//     const newUser = new User({email,username});
//     const registeredUser = await User.register(newUser, password);
//     console.log(registeredUser);
//     res.redirect("/home#homeSection");
// });

app.listen(3000,() =>{
    console.log("Server is listening on port 3000");
});