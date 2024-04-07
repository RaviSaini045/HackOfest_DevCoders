import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Upvote } from "../models/upvote.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const toggleUpvote = asynchandler(async (req, res, _) => {
  const { issueId } = req.body;
  if (!issueId) throw new ApiError(400, "Issue id is Required");
  const userId = req.user._id;
  const upvoted = await Upvote.find({
    issue: issueId,
    upvotedBy: userId,
  });
  if (upvoted.length === 0) {
    const upvote = await Upvote.create({
      issue: issueId,
      upvotedBy: userId,
    });
    if (!upvote) throw new ApiError(500, "Unable to Upvote");
    return res
      .status(200)
      .json(new ApiResponse(200, upvote, "Issue Upvoted Successfully"));
  } else {
    const downvoted = await Upvote.findByIdAndDelete(upvoted._id);
    console.log(downvoted);
    if (downvoted) throw new ApiError(500, "Unable to downvote");
    return res.status(200, {}, "Issue Downvoted Successfully");
  }
});// tested but not disliking

const getUpvotes = asynchandler(async (req, res, _) => {
  const { issueId } = req.body;
  if (!issueId) throw new ApiError(400, "Issue ID is required");
  const upvotes = await Upvote.find({
    issue: issueId,
  });
  if (!upvotes) throw new ApiError(500, "Something Went Wrong");
  return res
    .status(200)
    .json(new ApiResponse(200, upvotes, "Upvotes fetched Successfully"));
}); // tested

export { toggleUpvote, getUpvotes };
