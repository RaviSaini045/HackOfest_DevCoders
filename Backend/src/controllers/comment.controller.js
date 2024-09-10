import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Comment } from "../models/comment.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
const postComment = asynchandler(async (req, res, _) => {
  const { content, issueId } = req.body;
  if (!content || !issueId) throw new ApiError(400, "All fields are required");
  const userId = req.user._id;
  const comment = await Comment.create({
    content,
    issue: issueId,
    owner: userId,
  });
  if (!comment) throw new ApiError(500, "Unable to post Comment");
  return res
    .status(200)
    .json(new ApiResponse(200, comment, "Comment posted Successfully"));
})// tested

const getComments = asynchandler(async (req, res, _) => {
  const { issueId } = req.params;
  if (!issueId) throw new ApiError(400, "Issue ID is required");
  const comments = await Comment.find({
    issue: issueId,
  }).populate({
    path: "owner",
    select: "-password -email -refreshToken -resetPasswordTokenExpiry -resetPasswordToken -aadharCard -updatedAt -updatedAt", // Exclude the 'password' and 'email' fields from the 'owner'
  }).populate("issue").sort({ createdAt: -1 }).exec();
  console.log(comments);
  if (!comments) throw new ApiError(500, "Unable to load Comments");
  return res
    .status(200)
    .json(new ApiResponse(200, comments, "Comments loaded Successfully"));
 });// tested

const deleteComment = asynchandler(async (req, res, _) => {
  const { commentId } = req.body;
  if (!commentId) throw new ApiError(400, "Comment Id is required");
  const deletedComment = await Comment.findByIdAndDelete(commentId);
  if (!deletedComment)
    throw new ApiError(
      500,
      "Something Went Wrong !! please try after sometime"
    );
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Comment Deleted Succesfully"));
});

export { postComment, getComments, deleteComment };
