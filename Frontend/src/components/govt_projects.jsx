import project_img from "../assets/project.png"
import { MdOutlineLocationOn } from "react-icons/md";
import Location from "../assets/Map_Icon.svg"
import { IoMdAddCircle } from "react-icons/io";
import addProject_icon from "../assets/add_project_icon.svg"
import Navbar from "./navbar";
import PhoneNavbar from "./PhoneSizeNavbar";

const GovtProject = ()=>{
   return(
    <>
    <div className="flex ">
        
    <div className="hidden sm:block">
      <Navbar/>
    </div>
    <div className="sm:hidden">
          <PhoneNavbar/>
    </div>
    
    <div className="">
        <div className="flex m-3 p-3">
            <div>
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="m-5 p-5">
            <div><h1>NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img src={Location}></img>
            <h2>Patna, Bihar</h2>
            </div>
            </div>
        </div>

        <div className="flex m-3 p-3">
            <div>
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="m-5 p-5">
            <div><h1>NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img src={Location}></img>
            <h2>Patna, Bihar</h2>
            </div>
            </div>

        </div>

        <div className="flex m-3 p-3">
            <div>
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="m-5 p-5">
            <div><h1>NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img src={Location}></img>
            <h2>Patna, Bihar</h2>
            </div>
            </div>

        </div>

        <div className="flex m-3 p-3">
            <div>
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="m-5 p-5">
            <div><h1>NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img src={Location}></img>
            <h2>Patna, Bihar</h2>
            </div>
            </div>

        </div>

        <div className="flex m-3 p-3">
            <div>
            <img className="h-50 w-60 project_img rounded-2xl" alt="project" src={project_img}></img>
            </div>
            
            <div className="m-5 p-5">
            <div><h1>NIT Patna , Bihta Campus</h1></div>
            <div className="flex place-items-center">
            <img src={Location}></img>
            <h2>Patna, Bihar</h2>
            </div>
            </div>

        </div>
        
        
             <div>
                <img className="fixed bottom-20 right-10" src={addProject_icon}></img>
            </div>
    </div>
    </div>
    </>
   );
};

export default GovtProject;