import express  from "express";
import { CarrierApply, ContactUs } from "../controller/auth.js";
const router = express.Router();

router.route("/carrier-apply").post(CarrierApply)
router.route("/contact-us").post(ContactUs)


export default router;  