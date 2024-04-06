import mongoose, { Schema } from "mongoose";
const issueSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      }, // Index for geospatial queries
    },
    media: [
      {
        type: String,
      },
    ],
    anonymous: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["reported", "in-Progress", "Completed"],
      default: "reported",
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

issueSchema.index({
  location: "2dsphere"
})
export const Issue = mongoose.model("Issue", issueSchema);