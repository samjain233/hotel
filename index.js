//requiring external pakages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


//middlewares
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());


//requiring internal files-----------------------------------
const admin = require("./src/admin/admin");



//-----------------------------------------------------------
app.use("/admin", admin);




//routes-----------------------------------------------------
app.get("/login", (req, res) => {
    
    res.render("userlogin/login.ejs");
});






//port----------------------------------------------------
const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`server started on port:${PORT}`);
});