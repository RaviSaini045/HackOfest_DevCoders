import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { OPTIONS, OTP_SUBJECT } from "../constants.js";
import bcrypt from "bcrypt";
import { mailSender } from "../utils/mailSender.js";
import { OTP } from "../models/OTP.model.js";
import otpTemplate from "../mail/templates/verificationMail.js";

const generateAcessandRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong whil generating  acess and refresh token" + error
    );
  }
};
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
const sendOTP = asynchandler(async (req, res, _) => {
  const { email } = req.body;
  if (!email) throw new ApiError(400, "Email is required");
  const existedUser = await User.findOne({ email });
  if (existedUser) throw new ApiError(403, "User already Exists");
  const otp = generateOTP();
  const savedOTP = await OTP.create({
    email,
    otp,
  });
  if (!savedOTP) throw new ApiError(500, "Unable to Save OTP");
  const mail = mailSender(email, OTP_SUBJECT, `$Your OTP is ${otp}`);
  if (!mail)
    throw new ApiError(500, "Something went wrong while sending email");
  return res
    .status(200)
    .json(new ApiResponse(200, savedOTP, "OTP Sent Succesfully"));
}); //tested

const registerUser = asynchandler(async (req, res) => {
  const { fullName, email, username, password, aadharCard, otp,role } = req.body;
  console.log(req.body)
  if (
    [fullName, email, username, password, aadharCard, otp, role].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All feilds are required");
  }
  const existeduser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existeduser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  const dbOTP = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
  if (!dbOTP) throw new ApiError(500, "Something went wrong");
  if (dbOTP.expiresAt < new Date())
    throw new ApiError(401, "OTP is invalid or expired");
  const avatarLocalpath = req.file?.path;
  console.log(req.file);
  if (!avatarLocalpath) throw new ApiError(400, "Avatar file is required");
  const avatar = await uploadOnCloudinary(avatarLocalpath);
  if (!avatar) {
    throw new ApiError(400, "Smething Went wrong while uploading the code");
  }
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    aadharCard,
    email: email.toLowerCase(),
    password,
    role,
    username,
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registeing the user ");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created Sucessfully"));
}); //80% tested

const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;
 
  console.log(email,password);
  if (!email || !password) {
    throw new ApiError(400, "Username or password is required");
  }
  const username = null;
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User do not exist");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "invalid user credentials");
  }
  const { accessToken, refreshToken } = await generateAcessandRefreshTokens(
    user._id
  );
  console.log(accessToken);
  //to create a user removing the password and refreshtoken it can be of our use in future
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  return res
    .status(200)
    .cookie("accessToken", accessToken, OPTIONS)
    .cookie("refreshToken", refreshToken, OPTIONS)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});// tested

const logoutUser = asynchandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  return res
    .status(200)
    .clearCookie("accessToken", OPTIONS)
    .clearCookie("refreshToken", OPTIONS)
    .json(new ApiResponse(200, {}, "User logged Out"));
});// tested

const updatePassword = asynchandler(async (req, res) => {
    const {  oldPassword, newPassword } = req.body;
    const  userId  = req.user._id;
    console.log(oldPassword, newPassword,userId);
    if (!userId || !oldPassword || !newPassword)
      throw new ApiError(400, "userId or password is required");
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User do not exist");
    }
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
      throw new ApiError(404, "old password is incorrect");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json(new ApiResponse(200, {}, "User Password updated"));
});//tested

export { sendOTP, registerUser, loginUser, logoutUser, updatePassword };
