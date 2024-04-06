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

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/issue", issueRouter);
app.use("/api/v1/project", projectRouter);

export { app };
