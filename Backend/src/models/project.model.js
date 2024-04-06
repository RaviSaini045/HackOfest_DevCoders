import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    projectModel: {
      type: String,
      required: true,
    },
    objective: [
      {
        type: String,
      },
    ],
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
    
    stakeholders: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["planned", "ongoing", "completed"],
      default: "planned",
    },
    assignedTo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],
  },
  {
    timestamps: true,
  }
);

projectSchema.index({location: "2dsphere"});

const Project = mongoose.model("Project", projectSchema);

export { Project };
