require("../db/connection");
const mongoose=require("mongoose");

const adminSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    verify :{
        type : Boolean,
    },
    salt :{
        type : String
    },
    hash :{
        type : String
    },
    tokens : [{
        token : {
            type : String
        }
    }]
});

//model
const Admin = new mongoose.model("admin",adminSchema);

module.exports = Admin;