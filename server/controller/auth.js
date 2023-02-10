import carrierApply from "../models/carrierApply.js"
import contactUs from "../models/contactUs.js"
import * as fs from 'fs'
import privateUser from "../models/privateUser.js"
import { generateOTP } from "./helper/generateOTP.js"
import { sendEmail } from "./helper/sendEmail.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";




export async function CarrierApply(request, response , next){
    const {name , email, phone, jobRole} = request.body
 
    try {
        const carrierApplyUser = new carrierApply({
            name,
            email,
            phone,
            jobRole,
            resume: {
                data: fs.readFileSync('uploads/' + request.file.filename),
                contentType: request.file.mimetype
            }
        })
        await carrierApplyUser.save()
        response.status(200).json({
            success: true,
            message: "The email has been sent",
        })
    } catch (error) {
        response.status(400).json({
            success:false,
            error: error.message,
        })
    }

    fs.unlink(`uploads/${request.file.filename}`, (err)=>{
        if(err) console.log(err);
    })
}

export async function ContactUs(request, response, next) {
    const {name, email, phone, subject, message} = request.body;
    try {
        const contactUsUser = new contactUs({
            name,
            email,
            phone,
            subject,
            message
        });

        try {
            await contactUsUser.save();
            response.status(200).json({
                success:true,
                message: "We will contact you as soon as possible"
            })
        } catch (error) {
            response.status(400).json({
                success:false,
                message: "Could not sent the email"
            })
        }
        

    } catch (error) {
        response.status(500).json({
            success:false,
            message: error.message,
        })
    }

}

export async function sendOtp(request, response, next){
    const {emailId} = request.body;    
    
    try{
        const OTP = generateOTP();
         const message = `
            <h1> You have requested a password reset</h1>
            <p>Please Copy this OTP</p>
            <p>${OTP}</p>
        `
        try {
            await privateUser.updateOne({$set: {resetOTP: OTP, resetOtpDate : Date.now() + 10 *(60*1000)}})
            try{
                await sendEmail({
                    to: emailId,
                    subject: "Password Reset Request",
                    text: message,
                })
                response.status(200).json({
                    success:true,

                })
            }catch(err){
                response.status(400).json({
                success:false,
                err: err.message
            })
            }
        } catch (error) {
            response.status(400).json({
                success:false,
                err: error.message
            })
        }
    }catch(err){
        response.json({
            success: false,
            err: err.message,
        })
    }

}

export async function validateOTP(request, response){
    const {otp} = request.body;
    try {
        const user = await privateUser.findOne({
            resetOTP: otp,
            resetOtpDate: {$gt: Date.now()}
        })
        if(user == null){
             response.json({
                success: false,
            })
        }else{
            response.json({
                success: true,
                sendToken: jwt.sign({id: otp}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
            })
        }
       

    } catch (error) {
       response.json({
                success: true,
                error,
            })
    }
}

export async function changePassword(request, response){
    const {password}  = request.body;
    const salt = await bcrypt.genSalt(10);
    const hshpassword = await bcrypt.hash(password, salt);

    try {
        await privateUser.updateOne({$set: {password: hshpassword}})
        response.status(200).json({
            success: true,
            message: "Password has been succesfully reset"
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            error: error.message
        })
    }

}
