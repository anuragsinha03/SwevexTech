import mongoose from "mongoose"
import carrierApply from "../models/dbSchema.js"


export async function CarrierApply(request, response , next){
    const {name , email, phone, jobRole,resume} = request.body
    if(!name || !email || !phone || !jobRole || !resume){
        response.status(400).json({
            success: false,
            message: "Invalid Credentials"
        })
    }

    try {
        const carrierApplyUser = new carrierApply({
            name,
            email,
            phone,
            jobRole,
            resume,
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
}

export async function ContactUs(request, response, next) {

}

