import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

mongoose.set("strictQuery", true);
const privateUserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})

privateUserSchema.methods.matchPasswords = async function(password){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.compare(password, this.password)
};

privateUserSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
};

const privateUser = mongoose.model('privateUser', privateUserSchema);
export default privateUser
