const express = require('express');
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const Admin = require('../../models/admin');

const app = express();
app.use(cookieParser());

const isAuth = async (req)=>{
    try{
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token,process.env.SECRET);

    let admin = await Admin.findOne({_id:verifyUser._id}).select({username:1,email:1});
    return admin;
    }catch(error){
        console.log(error);
    }
}

module.exports = isAuth;