require("../db/connection");
const mongoose=require("mongoose");

const hoteldetailschema = new mongoose.Schema({
    ownerId : {
        type : String,
        required : true,
        unique : true
    },
    hotelName :{
        type : String
    },
    address :{
        type : String
    },
    contact :{
        type : String
    },
    nName :{
        type : String
    },
    ntotal :{
        type : String
    },
    nPrice :{
        type : String
    },
    nDescription :{
        type : String
    },
    vName :{
        type : String
    },
    vtotal :{
        type : String
    },
    vPrice :{
        type : String
    },
    vDescription :{
        type : String
    }
});

//model
const HotelDetails = new mongoose.model("hoteldetail",hoteldetailschema);

module.exports = HotelDetails;