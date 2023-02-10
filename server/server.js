import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import mongoose, { Mongoose } from "mongoose";
import privateAuth from './routes/privateAuth.js'
dotenv.config({path: "./config/var/.env"});



const app = express();

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use("/api/auth", auth);
app.use("/api/private", privateAuth);

const PORT = process.env.PORT || 5001;


mongoose.connect(process.env.MONGOOSE_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`The server is connected to http://localhost:${PORT}`);
    });
}).catch(error => {
    console.log(`Could not to MoongoBD because of ${error.message}`);
}) 




