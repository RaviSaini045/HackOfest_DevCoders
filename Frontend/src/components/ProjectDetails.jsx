import project from "../assets/project.png"
import Popup from "reactjs-popup"
import Update from "./UpdateStatus";
import Issue_card from "./issue_card";
import Navbar from "./navbar.jsx";
import ProjectDescription from "./ProjectDescriptionComponent.jsx"
import description from "../assets/description_icon.svg"
import Profile from "../assets/profile_icon.svg"
import statusBar from "../assets/status_bar2.svg"

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
                <div className="flex-auto w-10 text-kaddu-300"> in Progress</div>
                <div className="flex-auto w-52"><h1 className="font-bold text-4xl text-center">NIT PATNA BIHTA CAMPUS</h1></div>
                <div className=" flex flex-auto w-12 justify-around">
                <div>
                        <Popup trigger={
                                    <div className="flex">

                                    <button className= "p-2 rounded-lg ">Details
                                     
                                    </button>
                                    <img src={description} alt="description" />

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
                                    <button className="bg-kaddu-400 text-white font-bold p-2 rounded-lg ">Update Status</button>
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
            <div className="flex justify-center items-center ">
            <div className="mx-2"><img src={Profile}></img> </div>
                            
                                <div className="mx-2">Alexendra Dardio</div>
                                <div className="mx-2">@husnpari</div>
                           
            </div>

            
            
                  
           <div className="flex justify-center my-2">
            <img src={statusBar} alt="" />
           </div>
            
            <div className="flex justify-center my-1">
                <button className="bg-kaddu-400 text-white font-bold rounded-lg m-2 p-2 ">Save</button>
            </div>
            
            <div className="flex flex-wrap justify-center">
                <Issue_card />
                <Issue_card/>
                <Issue_card/>
                <Issue_card/>
                </div>
        </div>
        </div>
        </>
    );
};

export default ProjectDetails;