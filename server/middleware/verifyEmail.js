import privateUser from "../models/privateUser.js";

export async function verifyEmaill(req, res, next){
    const {emailId} = req.body;
    const response = await privateUser.aggregate([{"$match": {emailId: {$eq: emailId}} }]);
    if(response.length > 0){
      next()
    }else{
        res.status(400).json({
            err: "Sorry, you can not change the password using this email",
        });
    }

}