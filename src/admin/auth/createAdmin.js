const randomstring = require("randomstring");
const bcrypt = require("bcrypt");
const Admin = require("../../models/admin");



const createAdmin = async (username, email, password) => {
    try {
        const salt1 = randomstring.generate(20);
        const salt2 = await bcrypt.genSalt();
        const saltedpassword = salt1 + password + salt2;
        const salt = salt1 + salt2;
        const hash = await bcrypt.hash(saltedpassword, 10);

        const newadmin = new Admin({
            username: username,
            email: email,
            verify : false,
            salt: salt,
            hash: hash,
        })

        const result = await newadmin.save();
        return result;
    } catch (error) {
        console.log(error);
    }

};


module.exports = createAdmin;