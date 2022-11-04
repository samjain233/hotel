const express = require("express");

const router = express.Router();

const adminlogin = require("./auth/login");
const fillhotelDetail = require("./buildHotel/fillHoteldetail");


router.use("/",adminlogin);
router.use("/",fillhotelDetail);


module.exports = router;
