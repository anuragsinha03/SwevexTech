import privateUser from "../models/privateUser.js";

export async function adminLogin(request, response ,next){
    const {username, password} = request.body;
    try {
        const privateUsers = await privateUser.findOne({username}).select("+password")
        if(!privateUsers) response.status(401).json({error: "Invalid Credintials"})
        const isMatch = await privateUsers.matchPasswords(password);
        if(!isMatch) response.status(401).json({error: "Invalid Credintial"})
        sendToken(privateUsers,200, response);
    } catch (error) {
        response.status(500).json({success: false, error: error.message});
    }
}


const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({success: true, token})
}

