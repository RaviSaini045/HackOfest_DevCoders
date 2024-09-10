// const BASE_URL = "https://public-sphere-backend.onrender.com";
const BASE_URL = "http://localhost:4000";

const USER_URL = BASE_URL + "/api/v1/user";
const ISSUE_URL = BASE_URL + "/api/v1/issue"; 
const PROJECT_URL = BASE_URL + "/api/v1/project";
const COMMENT_URL = BASE_URL + "/api/v1/comment";
const UPVOTE_URL = BASE_URL + "/api/v1/upvote";
const RESET_PASSWORD_URL = BASE_URL + "/api/v1/resetPassword";

//  USER ROUTES 
export const SEND_OTP = USER_URL + "/send-otp";
export const REGISTER = USER_URL + "/signup";
export const LOGIN = USER_URL + "/login";
export const LOGOUT = USER_URL + "/logout";
export const UPDATE_PASSWORD = USER_URL + "/update-password";

//  ISSUE ROUTES
export const POST_ISSUE = ISSUE_URL + "/post-issue";
export const GET_ISSUES = ISSUE_URL + "/get-issue";
export const GET_ISSUE_BY_FILTER = ISSUE_URL + "/get-issue-by-filter";
// export const GET_ISSUE_BY_ID = ISSUE_URL + "/update-issue/:id";
export const GET_ISSUE_BY_ID = ISSUE_URL + "/get-issue-by-id/";
export const UPDATE_ISSUE = ISSUE_URL + "update-issue/:id";
export const GET_ISSUES_OF_USER = ISSUE_URL + "/get-user-issue";

//  PROJECT ROUTES
export const POST_PROJECT = PROJECT_URL + "/post-project";
export const GET_PROJECTS = PROJECT_URL + "/get-projects";
export const GET_PROJECTS_BY_FILTER = PROJECT_URL + "/get-project-by-filter"; 
// export const GET_PROJECT_BY_ID = PROJECT_URL + "/get-project/:projectID";
export const GET_PROJECT_BY_ID = PROJECT_URL + "/get-project";
// export const UPDATE_PROJECT = PROJECT_URL + "/update-project/:projectId";
export const UPDATE_PROJECT = PROJECT_URL + "/update-project";

//  COMMENTS ROUTES
export const POST_COMMENT = COMMENT_URL + "/post-comment";
export const GET_COMMENTS = COMMENT_URL + "/get-comment/";
export const DELETE_COMMENT = COMMENT_URL + "/delete-comment";

//  UPVOTE ROUTES
export const TOGGLE_UPVOTE = UPVOTE_URL + "/toggle-upvote";
export const GET_UPVOTES = UPVOTE_URL + "/get-upvotes/";
export const GET_USER_UPVOTES_ISSUES = UPVOTE_URL + "/get-user-upvoted-issue";

//  RESET PASSWORD URL
export const RESET_PASSWORD_TOKEN = RESET_PASSWORD_URL + "/generate-reset-password-token";
export const RESET_PASSWORD = RESET_PASSWORD_URL + "/reset-password";
