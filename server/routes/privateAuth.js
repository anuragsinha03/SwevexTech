import express  from "express";
import { adminLogin, getContactDetails, VerifyToken } from "../controller/PrivateAuth.js";
const router = express.Router();

router.route("/admin-login").post(adminLogin)
router.route("/verify-token").get(VerifyToken)
router.route("/get-contact-details").get(getContactDetails)


export default router;  