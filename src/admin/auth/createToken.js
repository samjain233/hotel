const jwt = require("jsonwebtoken");
const Admin = require("../../models/admin");

const createToken = async (id)=>{
    const token = await jwt.sign({_id:id},process.env.SECRET,{
        expiresIn : "100 minutes"
    });
    const admin = await Admin.findOne({_id : id});
    admin.tokens = admin.tokens.concat({token});
    await admin.save();
    return token;
}

module.exports = createToken;

