import { Router } from "express";
import { loginUser, registerUser, sendOTP, updatePassword, logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/send-otp").post(sendOTP);
router.route("/signup").post(upload.single("avatar"), registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/update-password").patch(verifyJWT, updatePassword);

export default router;