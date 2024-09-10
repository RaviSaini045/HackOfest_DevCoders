import project_img from "../assets/project.png"
import { MdOutlineLocationOn } from "react-icons/md";
import Location from "../assets/Map_Icon.svg"
import { IoMdAddCircle } from "react-icons/io";
import addProject_icon from "../assets/add_project_icon.svg"
import Navbar from "./navbar";
import PhoneNavbar from "./PhoneSizeNavbar";
import NewProject from "./NewProject";
import Popup from "reactjs-popup";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { getProjects } from "../services/operations/projectApi";
import ProjectCard from "./ProjectCard";
import ShimmerUi from "./ShimmerUi";
import { useNavigate } from "react-router";

const GovtProject = memo(()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isLoading=useSelector((state)=>state.loader.isLoading);
    const userLocation=useSelector((state)=>state.auth.userLocation)
    const allProjects=useSelector((state)=>state.project?.allProjects)
    useEffect(() => {
        if (userLocation) {
          const timer = setTimeout(() => {
            dispatch(getProjects({
              currentLatitude: userLocation.latitude,
              currentLongitude: userLocation.longitude,
            },navigate));
          }, 300);
    
          return () => clearTimeout(timer);
        }
      }, [userLocation, dispatch,navigate]);

    
   return(
    <>
    <div className="flex justify-start min-h-screen ">
        
    <div className="hidden sm:block">
      <Navbar/>
    </div>
    <div className="sm:hidden">
          <PhoneNavbar/>
    </div>
    
    <div className=" flex flex-col pt-4 justify-start items-start pb-36 md:pb-20 overflow-y-auto md:w-[calc(100vw-250px)]">
        <div className="px-2 md:px-8 w-full">
        {isLoading && <ShimmerUi route={""}/>}
        { allProjects?.length>0 ? allProjects?.map((project,index)=>(<ProjectCard projectData={project} key={project._id}/>)):<div>No Project Avilabel in current Location</div>}
        </div>
        {/* <div className="flex p-4 items-center">
            <div className="px-2 md:px-4">
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="flex flex-col justify-center items-start">
            <div><h1 className="break-all">NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img className="h-8 w-8" src={Location}></img>
            <p className="break-all">Patna, Bihar</p>
            </div>
            </div>
        </div> */}
        

        
        <Popup
              trigger={
                <div>
                    <img className="fixed bottom-20 right-10" src={addProject_icon}></img>
                </div>
              }
              modal
              nested
            >
            {(close) => <NewProject close={close} />}
        </Popup>
        
    </div>
    </div>
    </>
   );
});

GovtProject.displayName="GovtProject"


export default GovtProject;