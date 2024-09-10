import { Router } from "express";
import { deleteComment, getComments, postComment } from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"; 

const router = Router();


router.route("/post-comment").post(verifyJWT, postComment);
router.route("/get-comment/:issueId").get(verifyJWT, getComments);
router.route("/delete-comment").delete(verifyJWT, deleteComment);

export default router;
