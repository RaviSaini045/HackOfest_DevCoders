import { Router } from "express";
import { getIssues, getIssuesByFilter, getIssuesById, getUsersIssues, postIssue, updateIssue } from "../controllers/issue.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();


router.route("/post-issue").post(verifyJWT,upload.array("media",6), postIssue);
router.route("/get-issue").post(verifyJWT,getIssues);
router.route("/get-issue-by-filter").get(verifyJWT,getIssuesByFilter);
router.route("/update-issue/:id").patch(verifyJWT, updateIssue);
router.route("/get-issue-by-id/:issueId").get(verifyJWT,getIssuesById)
router.route("/get-user-issue").get(verifyJWT,getUsersIssues)


export default router;