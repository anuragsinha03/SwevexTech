import carrierApply from "../models/carrierApply.js"
import contactUs from "../models/contactUs.js"
import * as fs from 'fs'


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
}


