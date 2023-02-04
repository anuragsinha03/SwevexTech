import express  from "express";
import { adminLogin, VerifyToken } from "../controller/PrivateAuth.js";
const router = express.Router();

router.route("/admin-login").post(adminLogin)
router.route("/verify-token").get(VerifyToken)


export default router;  