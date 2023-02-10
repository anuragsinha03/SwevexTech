import privateUser from "../models/privateUser.js";
import jwt from 'jsonwebtoken';
import  contactUs  from "../models/contactUs.js";
import carrierApply from "../models/carrierApply.js";

export async function adminLogin(request, response ,next){
    const {username, password} = request.body;
    try {
        const privateUsers = await privateUser.findOne({username}).select("+password")
        privateUsers && await privateUsers.matchPasswords(password) ? sendToken(privateUsers,200, response) : response.status(401).json({success:false, error: "Invalid Credentials"})
    } catch (error) {
        response.status(500).json({success: false, error: error.message});
    }
}

export async function VerifyToken(request, response, next){
    const token = request.headers['authorization'].split(" ")[1]
    
   jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if(!decode) response.status(400).json({success: false, err})
    else response.status(200).json({success:true, token})
   })
 
}



export async function getContactDetails(request,response, next){
    let ContactUsDetails = await contactUs.find()
    response.status(200).json({
        Details: ContactUsDetails,
    })
}

export async function getCarrieraApplyDetails(request,response, next){
    let carrierApplyDetails = await carrierApply.find()
    response.status(200).json({
        Details: carrierApplyDetails,
    })
}

export async function deleteCarrierApplyDetails(request, response, next){
    const id = request.params.id;
    try {
         carrierApply.deleteOne({_id : id}).then((res) => {
            response.status(200).json({
                success:true,
            })
         }).catch((err) => {
            response.status(400).json({
                success:false,
                error: err.message,
            })
         })

    } catch (error) {
        
    }
   
}




const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({success: true, token})
}

