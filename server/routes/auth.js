import express  from "express";
import { CarrierApply, ContactUs } from "../controller/auth.js";
import multer from 'multer';
import { verifyEmaill } from "../middleware/verifyEmail.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})
const upload = multer({storage: storage})




router.route("/carrier-apply").post(upload.single('resume'), CarrierApply)
router.route("/contact-us").post(ContactUs)
router.route("/send-otp").post(verifyEmaill)

export default router;  