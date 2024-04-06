import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Issue } from "../models/issue.model.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fetch from "node-fetch";

const postIssue = asynchandler(async (req, res, _) => {
  const { description, longitude, latitude, anonymous } = req.body;
  if (
    [description, longitude, latitude, anonymous].some(
      (field) => field?.trim() === ""
    )
  )
    throw new ApiError(400, "All fields are Required");
  // const issueImagePath = req.files?.issueImage[0]?.path;
  if (!req.files) throw new ApiError(403, "Image path is required");
  const imgUpload = async () => {
    try {
      const arr = await Promise.all(
        req.files.map(async (imgLink) => {
          const localPath = imgLink.path;
          const imgUrl = await uploadOnCloudinary(localPath);
          if (!imgUrl) {
            throw new ApiError(500, "Unable to upload Images");
          }
          return imgUrl.url;
        })
      );
      return arr;
    } catch (error) {
      throw new ApiError(500, "Unable to upload Images");
    }
  };
  const media = await imgUpload();
  if (!media)
    throw new ApiError(500, "Something Went Wrong While Uploading Image");
  let issue;
  if (anonymous === "true") {
    issue = await Issue.create({
      description,
      media,
      anonymous,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });
  } else {
    const user = await User.findById(req._id);
    issue = await Issue.create({
      description,
      media,
      reportedBy: req.user._id,
      location: {
        type: "Point",
        coordinates: [longitude, latitude], // Longitude and Latitude of the place
      },
    });
  }
  if (!issue) throw new ApiError(500, "Unable to create issue");
  return res
    .status(200)
    .json(new ApiResponse(200, issue, "Issue created Successfully"));
}); //tested

const getIssues = asynchandler(async (req, res, _) => {
  const { currentLatitude, currentLongitude } = req.body;
  const radiusInMeters = 5000;
  const issues = await Issue.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [currentLongitude, currentLatitude],
        },
        $maxDistance: radiusInMeters,
        $minDistance:0,
      },
    },
  }).populate({
      path: "reportedBy",
    })
    .exec();
  if (!issues) throw new ApiError(500, "Unable to fetch Issues");
  return res
    .status(200)
    .json(new ApiResponse(200, issues, "Issues fetched Successfully"));
});//tested

const getIssuesByFilter = asynchandler(async (req, res, _) => {
  const { location } = req.body;
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=${process.env.GEOAPIFY_KEY}`
  );
  const data = await response.json();
  // console.log(data.results);
  const longitude = data.results[0].lon;
  const latitude = data.results[0].lat;
  console.log(longitude,latitude);
  const radiusInMeters = 25000;
  const issues = await Issue.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: radiusInMeters,
      },
    },
  }).populate("reportedBy").exec();
  if(!issues)
    throw new ApiError(500,"unable to fetch issues ");
  return res.status(200).json(
    new ApiResponse(200,issues,"Issues fetched successfully")
  )
});//tested

const updateIssue = asynchandler(async (req, res, _) => {
  const issueId = req.params.id;
  const { status } = req.body;
  if (!issueId || !status) throw new ApiError(400, "All fields are required");
  const updatedIssue = await Issue.findByIdAndUpdate(
    issueId,
    {
      status,
    },
    {
      new: true,
    }
  );
  if (!updatedIssue) throw new ApiError(500, "Unable to update issue");
  return res
    .status(200)
    .json(new ApiResponse(200, updatedIssue, "Issue Updated Successfully"));
});//tested

export { postIssue, getIssues, getIssuesByFilter, updateIssue };


