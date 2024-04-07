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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
import ProjectDescription from './components/ProjectDescriptionComponent.jsx'
=======
<<<<<<< HEAD
>>>>>>> fae05bd22cb18cc6077629e120156a40275f1a48
import PhoneNavbar from './components/PhoneSizeNavbar.jsx'
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
=======
import PhoneNavbar from './components/PhoneSizeNavbar.jsx'
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3

import LocationCapture from './components/LocationCapture.jsx'
import { useSelector } from "react-redux";
import Error from "./components/pages/Error.jsx";
function App() {
  const userLocation = useSelector(state => state.auth.userLocation);
  return (
    <>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Homepage/>
=======
       <Navbar />
             
=======
=======
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
    {/* <PhoneNavbar/> */}
    {/* <Post/> */}
    {/* <GovtProject/> */}
    {/* <Issues/> */}
    <Dashbord/>
=======
>>>>>>> fae05bd22cb18cc6077629e120156a40275f1a48
         {!userLocation && <LocationCapture/> }   
<<<<<<< HEAD
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
=======
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
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
              path="/profile/" 
              element={
              // <PrivateRoute>
                <Dashbord/>
              // </PrivateRoute>
            }
              />
              <Route path='/error' element={<Error/>}/>
          </Routes>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 80f31570f06a3d71129cd62a6e2af6d1e4be5ce6
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
=======
>>>>>>> 80f31570f06a3d71129cd62a6e2af6d1e4be5ce6
>>>>>>> 6063a32615fb188223e592d3fb92b1448acefea3
>>>>>>> fae05bd22cb18cc6077629e120156a40275f1a48
    </>

    
  );
}

export default App