import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Project } from "../models/project.model.js";

const postProject = asynchandler(async (req, res, _) => {
  const { title,description, longitude, latitude } = req.body;
  console.log(description,longitude,latitude);
  if ([title,description, longitude, latitude].some((field) => field?.trim() === ""))
    throw new ApiError(400, "All fields are Required");
  const projectImagePath = req.file?.path;
  if (!projectImagePath) {
    throw new ApiError(400, "Project Image is required");
  }
  const projectImage = await uploadOnCloudinary(projectImagePath);
  if (!projectImage) {
    throw new ApiError(500, "Something Went Wrong While Uploading Image");
  }
  const project = await Project.create({
    title,
    description,
    projectModel: projectImage.secure_url,
    reportedBy: req.user._id,
    location: {
      type: "Point",
      coordinates: [longitude, latitude], // Longitude and Latitude of the place
    },
  });
  if (!project) throw new ApiError(500, "Unable to post project");
  return res
    .status(200)
    .json(new ApiResponse(200,project, "project posted Successfully"));
});//tested

const getProject = asynchandler(async (req, res, _) => {
  const { currentLatitude, currentLongitude } = req.body;
  const radiusInMeters = 50000;
  const project = await Project.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [currentLongitude, currentLatitude],
        },
        $maxDistance: radiusInMeters,
      },
    },
  });
  if (!project) throw new ApiError(500, "Unable to fetch Projects");
  return res
    .status(200)
    .json(new ApiResponse(200, project, "Project fetched Successfully"));
});//tested

const getProjectByFilter = asynchandler(async (req, res, _) => {
  const { location } = req.body;
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=${process.env.GEOAPIFY_KEY}`
  );
  const data = await response.json();
  const longitude = data.results[0].lon;
  const latitude = data.results[0].lat;
  const radiusInMeters = 25000;
  const projects = await Project.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: radiusInMeters,
      },
    },
  });
  if (!projects) throw new ApiError(500, "Unable to fetch Projects");
  return res
    .status(200)
    .json(new ApiResponse(200, projects, "Projects Fetched Successfully"));
});//tested

const getProjectById = asynchandler(async (req, res, _) => {
  const { projectId } = req.params;
  if (!projectId) throw new ApiError(401, "Project ID is required");
  const project = await Project.findById(projectId)
    .populate({ path: "issues" })
    .exec();
  if (!project) throw new ApiError(500, "Unable to fetch Project Details");
  return res
    .status(200)
    .json(
      new ApiResponse(200, project, "Project Details fetched Successfully")
    );
}); //tested

const updateProjectStatus = asynchandler(async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { status } = req.body;
    if([projectId,status].some((field) => field?.trim() === ""))
      throw new ApiError(403,"All fields are Required");
    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      { status },
      { new: true }
    );

    if (!updatedProject) {
      return next(new ApiError(404, "Project not found"));
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          updatedProject,
          "Project status updated successfully"
        )
      );
  } catch (error) {
    next(new ApiError(500, "Unable to update project status", error));
  }
}); //tested

export {
  postProject,
  getProject,
  getProjectByFilter,
  getProjectById,
  updateProjectStatus,
};
