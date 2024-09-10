import { Router } from "express";
import { getUpvotes, getUserUpvotedIssues, toggleUpvote } from "../controllers/upvote.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

// router.route("toggle-upvote").post(toggleUpvote);
// router.route("/get-upvotes").get(getUpvotes);
router.route("/toggle-upvote").post(verifyJWT, toggleUpvote);
router.route("/get-upvotes/:issueId").get(verifyJWT, getUpvotes);
router.route("/get-user-upvoted-issue").get(verifyJWT, getUserUpvotedIssues);


export default router;