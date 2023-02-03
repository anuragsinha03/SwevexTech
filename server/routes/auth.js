import express  from "express";
import { CarrierApply, ContactUs } from "../controller/auth.js";
import { adminLogin } from "../controller/PrivateAuth.js";


const router = express.Router();

router.route("/carrier-apply").post(CarrierApply)
router.route("/contact-us").post(ContactUs)
router.route("/admin-login").post(adminLogin)

export default router;  