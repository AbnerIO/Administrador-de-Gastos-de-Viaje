const express = require("express");
const app = express();
const passport=require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const PassportLocal = require("passport-local");
require('dotenv').config()


app.set("view engine", "ejs")
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + 'app'))
app.use(express.urlencoded({extender:true}))

app.use(cookieParser("secreto"));
app.use(session({
    secreto: "secreto",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PassportLocal(function (username, password,done){
    
    if(username==="abner11" && password=="1960233"){
            return done(null,{id:1 ,name:"Cody"});
    }
    done(null, false);
}));

// deserealizacion
passport.serializeUser(function(user,done){
    done(null, user.id);
})

passport.deserializeUser(function(id, done){
    done(null, {id:1, name:"Cody"})
})




app.get("/tproject", (req,res,next)=>{
    if(req.isAuthenticated()) return next();

    res.redirect("/")
},(req, res)=>{
    //si ya iniciamos sesion entras
    res.render("index")
})


app.get("/", (req, res)=>{
    res.render("login")
})

app.post("/login", passport.authenticate("local",{
    successRedirect: "/tproject",
    failureRedirect: "/"
}))

app.listen(process.env.PORT, ()=>{
    console.log(`SERVIDOR EN ${process.env.PORT}`)
})