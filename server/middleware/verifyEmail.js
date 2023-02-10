import privateUser from "../models/privateUser.js";

export async function verifyEmaill(req, res, next){
    // const {email} = req.body;
    const response = await privateUser.find({emailId: ["prat"]});
    console.log(response);
    res.status(200).json({
        response,
    })
}