import project from "../assets/project.png";
import Popup from "reactjs-popup";
import Update from "./UpdateStatus";
import Issue_card from "./issue_card";
import Navbar from "./navbar.jsx";
import ProjectDescription from "./ProjectDescriptionComponent.jsx";
import description from "../assets/description_icon.svg";
import Profile from "../assets/profile_icon.svg";
import statusBar from "../assets/status_bar2.svg";
import PhoneNavbar from "./PhoneSizeNavbar.jsx";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById, updateProjectStatus } from "../services/operations/projectApi.js";

const ProjectDetails = () => {
  const projectData = useSelector((state) => state.project?.projectData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectStatus,setProjectStatus]=useState(null);

  const { projectId } = useParams();
  useEffect(() => {
    if(projectId){
      const timer=setTimeout(()=>{
        dispatch(getProjectById(projectId),navigate);

      },300)
      return ()=>clearTimeout(timer);
    }
  }, [projectId,dispatch,navigate]);


  const handelSave=()=>{
    if(projectStatus){
      dispatch(updateProjectStatus(projectId,projectStatus,navigate))
    }
    else{
      alert("No input found")
    }
  }
  
  return (
    <>
      <div className="flex ">
        <div className="hidden sm:block">
          <Navbar />
        </div>
        <div className="sm:hidden">
          <PhoneNavbar />
        </div>

        <div className="m-4 md:ml-5 w-full ">
          {projectData ? (
            <div>
              <div>
                <img
                  className="w-full h-[250px] md:h-[350px] shadow-lg"
                  src={projectData?.projectModel}
                ></img>
              </div>

              <div className=" flex p-2">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className=" flex w-full justify-between items-center gap-2">
                    <div className="flex-auto text-xs text-kaddu-300">
                      {" "}
                      in Progress
                    </div>
                    <div className="flex justify-center items-center">
                      <Popup
                        trigger={
                          <div className="flex">
                            <button className="p-2 rounded-lg ">Details</button>
                            <img src={description} alt="description" />
                          </div>
                        }
                        modal
                        nested
                      >
                        {(close) => <ProjectDescription close={close} />}
                      </Popup>
                    </div>
                    <div>
                      <Popup
                        trigger={
                          <div>
                            <button className="bg-kaddu-400 text-white  p-2 rounded-lg ">
                              Update Status
                            </button>
                          </div>
                        }
                        modal
                        nested
                      >
                        {(close) => <Update close={close} setProjectStatus={setProjectStatus} />}
                      </Popup>
                    </div>
                  </div>
                  <div className="flex h-20 line-clamp-1">
                    <h1 className="font-bold text-2xl md:text-4xl line-clamp-1">
                      {projectData?.title}
                    </h1>
                  </div>
                </div>
              </div>
              {projectData?.assignedTo?.length >0 ? (
                <div className="flex justify-center items-center ">
                  <div className="mx-2">
                    <img src={Profile}></img>{" "}
                  </div>

                  <div className="mx-2">Alexendra Dardio</div>
                  <div className="mx-2">@husnpari</div>
                </div>
              ) : (
                <div> No one assigned To </div>
              )}
              {/* have to ask */}

              <div className="flex justify-center my-2">
              <img src={statusBar} alt="" />
            </div>
            
              <div className="flex justify-center my-1">
                <button className="bg-kaddu-400 text-white font-semibold rounded-2xl m-2 p-2 px-4 " onClick={handelSave}>
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div> Loading.... </div>
          )}

          {/* <div className="flex flex-wrap justify-center">
                <Issue_card />
                <Issue_card/>
                <Issue_card/>
                <Issue_card/>
                </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
