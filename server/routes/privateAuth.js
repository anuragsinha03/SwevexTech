import express  from "express";
import { adminLogin, deleteCarrierApplyDetails, getCarrieraApplyDetails, getContactDetails, VerifyToken } from "../controller/PrivateAuth.js";
const router = express.Router();

router.route("/admin-login").post(adminLogin)
router.route("/verify-token").get(VerifyToken)
router.route("/get-contact-details").get(getContactDetails)
router.route("/get-carrier-apply-details").get(getCarrieraApplyDetails)
router.route("/delete-carrier-apply-details/:id").delete(deleteCarrierApplyDetails)


export default router;  