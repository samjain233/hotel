const express = require("express");
const bodyParser = require('body-parser');
const createAdmin = require("./createAdmin");
const createToken = require("./createToken");
const findUser = require("./findUser");



const router = express.Router();
router.use(express.static("public"));
router.use(bodyParser.urlencoded({
    extended: true
}));



router.get("/login", async (req, res) => {
    res.render("admin/login/login.ejs");
});

router.post("/register", async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        if (password === confirmPassword) {
            const admin = await createAdmin(username, email, password);
            const token = await createToken(admin._id);
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 600000),
                httpOnly: true
            });
            res.send("user created");
        }
        else {
            console.log("password didn't matched");
            res.send("password didn't matched");
        }

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await findUser(email, password, res);
        if (result.status) {
            res.status(result.statuscode).send("login successful");
        }
        else {
            res.status(result.statuscode).redirect("/admin/login");
        }


    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});


module.exports = router;

