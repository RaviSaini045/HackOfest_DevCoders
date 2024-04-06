import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("../public"));

import userRouter from "../src/routes/user.routes.js";
import issueRouter from "../src/routes/issue.routes.js";
import projectRouter from "../src/routes/project.routes.js";
import commentRouter from "../src/routes/comment.route.js";
import upvoteRouter from "../src/routes/upvote.route.js";
import resetPasswordRouter from "../src/routes/resetPassword.route.js";

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/issue", issueRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/upvote", upvoteRouter);
app.use("/api/v1/resetPassword", resetPasswordRouter);

export { app };
