import { Router } from "express";
import { generateresetPasswordToken, resetPassword } from "../controllers/resetPassword.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/generate-reset-password-token").patch(generateresetPasswordToken);
router.route("/reset-password/:token").patch(resetPassword);


export default router;