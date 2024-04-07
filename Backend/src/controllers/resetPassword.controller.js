import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { mailSender } from "../utils/mailSender.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { RESET_PASSWORT_SUBJECT } from "../constants.js";

const generateresetPasswordToken = asynchandler(async (req, res, _) => {
  const { email } = req.body;
  if (!email) throw new ApiError(400, "Email id is reequired");
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "Invalid Email");
  const resetPasswordToken = crypto.randomBytes(20).toString("hex");
  console.log(resetPasswordToken);
  console.log(user);
// useer.resetPasswordToken=resetPasswordToken;
// useer.resetPasswordTokenExpiry = Date.now() + 300000;
// useer.save({isNew:false})
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: {
        resetPasswordToken,
        resetPasswordTokenExpiry: Date.now() + 300000,
      },
    },
    { new: true }
  );
  console.log(updatedUser);
  if (!updatedUser)
    throw new ApiError(500, "Something went Wrong while generating token");
 
  await mailSender(email, RESET_PASSWORT_SUBJECT, `${resetPasswordToken}`);
  return res
        .status(200)
        .json(new ApiResponse(200, updatedUser, "Mail Sent Succesfully"));
});//tested

const resetPassword = asynchandler(async (req, res, _) => {
  const token = req.params.token;
  let { password, cpassword } = req.body;
  if (!token || !password || !cpassword)
    throw new ApiError(400, "All fields are required");
  if (password !== cpassword)
    throw new ApiError(400, "Password and Confirm Password should be Same");
  const user = await User.findOne({ resetPasswordToken: token });
  console.log(user);
  if (!user) throw new ApiError(500, "Token is invalid");
  // if (!(user.resetPasswordExpires > Date.now()))
    // throw new ApiError(403, "Token Expired");
	password = await bcrypt.hash(password,10);
  const updatedUser = await User.findByIdAndUpdate(user._id, 
	{
		$set: {
			password,
			resetPasswordToken: null,
			resetPasswordTokenExpiry: null,
		},
  },{new: true});
  console.log(updatedUser);
  if (!updatedUser) throw new ApiError(500, "Unable to update Password");
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password Updated Successfully"));
});//tested

export { generateresetPasswordToken, resetPassword };
