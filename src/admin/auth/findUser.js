const bcrypt = require("bcrypt");
const Admin = require("../../models/admin");
const createToken = require("./createToken");

const findUser = async (email, password,res) => {
    try {
        
        const admin = await Admin.findOne({ email: email });
        if (admin) {
            const salt = admin.salt;
            const salt1 = salt.substr(0, 20);
            const salt2 = salt.slice(20);
            const saltedpassword = salt1 + password + salt2;
            const verifypassword = await bcrypt.compare(saltedpassword, admin.hash);
            if(verifypassword)
            {
                const token = await createToken(admin._id);
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 600000),
                    httpOnly: true
                });
                const result = {
                    status : true,
                    statuscode : 200
                }
                return result;
            }
            else
            {
                console.log("wrong password entered");
                const result ={
                    status : false ,
                    error : "wrong password entered",
                    statuscode : 401
                }
                return result;
            }
        }
        else {
            console.log("user not found");
            const result ={
                status : false ,
                error : "user not found",
                statuscode : 401
            }
            return result;
        }
    } catch (error) {
        console.log(error);
        const result ={
            status : false ,
            error : error,
            statuscode : 401
        }
        return result;
    }
}

module.exports = findUser;