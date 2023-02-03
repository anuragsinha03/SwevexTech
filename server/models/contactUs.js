import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
})

const contactUs = mongoose.model('contactUs', contactUsSchema);
export default contactUs
