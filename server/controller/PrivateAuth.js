import privateUser from "../models/privateUser.js";
import jwt from 'jsonwebtoken';

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


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({success: true, token})
}

