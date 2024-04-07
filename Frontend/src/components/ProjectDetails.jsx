import project from "../assets/project.png"
import Popup from "reactjs-popup"
import Update from "./UpdateStatus";
import Issue_card from "./issue_card";
import Navbar from "./navbar.jsx";
import ProjectDescription from "./ProjectDescriptionComponent.jsx"

const ProjectDetails = ()=>{
    return (
        <>
        <div className="flex ">
            <div> <Navbar/></div>
        
        <div className="ml-5 ">
            <div>
            <img className="w-full h-[400px] shadow-lg"  src={project}></img>
            </div>

            <div className=" flex text-center justify-around p-5">
                <div className="flex-auto w-10"> in Progress</div>
                <div className="flex-auto w-52"><h1 className="font-bold text-4xl text-center">NIT PATNA BIHTA CAMPUS</h1></div>
                <div className=" flex flex-auto w-10 justify-around">
                <div>
                        <Popup trigger={
                                    <div>
                                    <button className="bg-blue-300 p-2 rounded-lg ">Details
                                    <img src="" alt="" /> 
                                    </button>
                                </div>}
                                    modal nested>
                                        {
                                                close => (
                                                    <ProjectDescription close = {close} />
                                                )}
                        </Popup>
                    </div>
                    <div>
                        <Popup trigger={
                                    <div>
                                    <button className="bg-blue-300 p-2 rounded-lg ">Update Status</button>
                                </div>}
                                    modal nested>
                                        {
                                                close => (
                                                    <Update close = {close} />
                                                )}
                        </Popup>
                    </div>
                    
            </div>
            </div>

            
            
                  
           <div className="m-7">
            Yha abhi prgress bar aayega....!!!!
           </div>
            
            <div className="m-5">
                <button className="bg-blue-400 rounded-lg m-2 p-2 ">Save</button>
            </div>
            
            <Issue_card />
        </div>
        </div>
        </>
    );
};

export default ProjectDetails;