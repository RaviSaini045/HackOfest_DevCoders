import { Router } from "express";
import { getUpvotes, toggleUpvote } from "../controllers/upvote.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

// router.route("toggle-upvote").post(toggleUpvote);
// router.route("/get-upvotes").get(getUpvotes);
router.route("/toggle-upvote").post(verifyJWT, toggleUpvote);
router.route("/get-upvotes").get(verifyJWT, getUpvotes);


export default router;