import mongoose from "mongoose";

const upvoteSchema = new mongoose.Schema({
  issue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Issue",
  },
  upvotedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Upvote = mongoose.model("Upvote", upvoteSchema);

export { Upvote };
