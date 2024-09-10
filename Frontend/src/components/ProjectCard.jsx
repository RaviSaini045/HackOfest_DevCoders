import { useNavigate, useParams } from "react-router"
import Location from "../assets/Map_Icon.svg"
import { useCallback } from "react";

export default function ProjectCard({projectData}) {
  const navigate=useNavigate();
  const projectId=projectData?._id;

  const handelClick=useCallback(()=>{
    navigate(`/project-detail/${projectId}`)
  },[])

  return (
    <>
         <div className="flex py-2  md:p-4 items-center border shadow-md my-4 rounded-md bg-kaddu-200"onClick={handelClick}>
                <div className="px-2 md:px-8 w-56 min-w-40 h-48 md:max-w-md md:w-96 md:max-h-72 rounded-xl overflow-hidden">
                  <div className="relative w-full h-full">
                    <img className=" object-cover h-full w-full project_img rounded-2xl " alt="project" src={projectData?.projectModel}></img>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center items-start p-4">
                <div className="w-full text-center"><h1 className="break-all text-sm md:text-xl line-clamp-2 md:line-clamp-3">{projectData?.title}</h1></div>
                <div className="flex place-items-center">
                <img className="h-8 w-8 text-sm line-clamp-2 md:line-clamp-3" src={Location}></img>
                <p className="break-all text-sm line-clamp-2 md:line-clamp-3">Patna, Bihar</p>
                </div>
                </div>
            </div>
    </>
  )
}
