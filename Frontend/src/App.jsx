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
import LocationCapture from './components/LocationCapture.jsx'
import { useSelector } from "react-redux";
function App() {
  const userLocation = useSelector(state => state.auth.userLocation);
  return (
    <>
         {!userLocation && <LocationCapture/> }   
        {/* Landing Page */}
          <Routes>
            <Route
              path="/"
              element={
                // <OpenRoute>
                  <Homepage />
                // </OpenRoute>
              }
            />
            {/* All Posts */}
            <Route
              path="/issue"
              element={
                // <PrivateRoute>
                  <Issues />
                // </PrivateRoute>
              }
            />
    
            <Route
              path='/issue:issueId'
              element= {
                // <PrivateRoute>
                  <Comment/>
                // </PrivateRoute>
              }
            />
            {/* Government Projects */}
            <Route
              path="/govt-projects"
              element={
                // <PrivateRoute>
                  <GovtProject />
                // </PrivateRoute>
              }
            />

    
            {/* Project Details */}
            <Route 
              path="/project-detail/:projectId" 
              element={
              // <PrivateRoute>
                <ProjectDetails/>
              // </PrivateRoute>
            } 
            />
            {/* Dashboard*/}
            <Route 
              path="/profile/:userName" 
              element={
              // <PrivateRoute>
                <Dashbord/>
              // </PrivateRoute>
            }

              />
          </Routes>
    </>

    
  );
}

export default App