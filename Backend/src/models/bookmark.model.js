import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  bookmarker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export { Bookmark };
