import { Router } from "express";
import { getProject, getProjectByFilter, getProjectById, postProject, updateProjectStatus } from "../controllers/project.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();


router.route("/post-project").post(verifyJWT,upload.single("projectModel"), postProject);
router.route("/get-projects").get(verifyJWT,getProject);
router.route("/get-project-by-filter").get(verifyJWT,getProjectByFilter);
router.route("/get-project/:projectId").get(verifyJWT,getProjectById);
router.route("/update-project/:projectId").patch(verifyJWT, updateProjectStatus);


export default router;