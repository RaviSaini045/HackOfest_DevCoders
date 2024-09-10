import Navbar from './components/navbar.jsx'
import GovtProject from './components/govt_projects.jsx'
import { Route, Routes } from 'react-router-dom'
import Issues from './components/pages/issues.jsx'
import Homepage from './components/pages/home_page.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import Comment from './components/comment.jsx'
import Dashbord from './components/Dashbord.jsx'
import OpenRoute from './components/Auth/OpenRoute.jsx'
import PrivateRoute from './components/Auth/PrivateRoute.jsx'
import Register from './components/Register.jsx'
import NewProject from './components/NewProject.jsx'
import Post from './components/pages/Post.jsx'

import ProjectDescription from './components/ProjectDescriptionComponent.jsx'

import PhoneNavbar from './components/PhoneSizeNavbar.jsx'

import LocationCapture from './components/LocationCapture.jsx'
import { useDispatch, useSelector } from "react-redux";
import Error from "./components/pages/Error.jsx";
import { setToken } from './slices/authSlice.js'
import MyPost from './components/pages/MyPost.jsx'
import MyLikes from './components/pages/MyLikes.jsx'
function App() {
  const userLocation = useSelector(state => state.auth.userLocation);
  const dispatch=useDispatch();
  const localtoken=JSON.parse(localStorage.getItem("token"));
  const {token}=useSelector((state)=>state.auth);
  if(!token){
    dispatch(setToken(localtoken));
  }
  return (
    <>
         {!userLocation && <LocationCapture/> }   

        {/* Landing Page */}
          <Routes>
            <Route
              path="/"
              element={
                <OpenRoute>
                  <Homepage />
                </OpenRoute>
              }
            />
            {/* All Posts */}
            <Route
              path="/issue"
              element={
                <PrivateRoute>
                  <Issues />
                </PrivateRoute>
              }
            />
    
            <Route
              path='/issue/:issueId'
              element= {
                <PrivateRoute>
                  {/* <Comment/> */}
                  <Post/>
                </PrivateRoute>
              }
            />
            {/* Government Projects */}
            <Route
              path="/govt-projects"
              element={
                <PrivateRoute>
                  <GovtProject />
                </PrivateRoute>
              }
            />

    
            {/* Project Details */}
            <Route 
              path="/project-detail/:projectId" 
              element={
              <PrivateRoute>
                <ProjectDetails/>
              </PrivateRoute>
            } 
            />
            {/* Dashboard*/}
            <Route 
              path="/profile/" 
              element={
              <PrivateRoute>
                <Dashbord/>
              </PrivateRoute>
            }
              />
            <Route 
              path="/my-post/" 
              element={
              <PrivateRoute>
                <MyPost/>
              </PrivateRoute>
            }
              />
            <Route 
              path="/my-likes/" 
              element={
              <PrivateRoute>
                <MyLikes/>
              </PrivateRoute>
            }
              />
              <Route path='/error' element={<Error/>}/>
          </Routes>
    </>

    
  );
}

export default App