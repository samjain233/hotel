const express = require("express");
const bodyParser = require('body-parser');
const isAuth = require("../auth/isAuth");
const HotelDetails = require("../../models/hoteldetail");



const router = express.Router();
router.use(express.static("public"));
router.use(bodyParser.urlencoded({
    extended: true
}));



router.get("/hoteldetails", async (req, res) => {
    try {
        const admin = await isAuth(req);
        if (admin) {
            res.status(200).render("admin/hoteldetail/hoteldetail.ejs");
        }
        else {
            res.status(401).send("bad request");
        }
    }
    catch (err) {
        res.status(401).send(err);
    }
});

router.post("/gethoteldetails", async (req, res) => {
    try {
        const admin = await isAuth(req);
        if (admin) {
            const update = req.body;
            console.log(req.body);
            const adminshotel = await HotelDetails.findOne({ ownerId: admin._id });
            if (adminshotel) {
                //hoteldetails  found , update the hotel
                const filter = { ownerId: admin._id };
                const newdata = await HotelDetails.findOneAndUpdate(filter, update);
                console.log(newdata);
            }
            else {
                //hoteldetails not found , create the newadminhotel
                await new HotelDetails({
                    ownerId: admin._id,
                }).save();

                const filter = { ownerId: admin._id };
                const newdata = await HotelDetails.findOneAndUpdate(filter, update);
                console.log(newdata);
            }
        }
        else {
            res.status(401).send("not authorized");
            console.log("not authorized");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

});


module.exports = router;

