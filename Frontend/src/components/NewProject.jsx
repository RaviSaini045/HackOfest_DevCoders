import { useRef, useState } from 'react';
import addImage from '../assets/addImage_icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { sendOTP } from '../services/operations/authAPI';
import bgImg from '../assets/signup_doodle.svg'
import { IoMdCloseCircle } from 'react-icons/io';
import { postProject } from '../services/operations/projectApi';

const NewProject = ({close}) => {
   const userLocation = useSelector(state => state.auth.userLocation);
   const dispatch = useDispatch();
   const navigate = useNavigate();
 const [formData, setFormData] = useState({
   title: "",
   description: "",
   objective: "",
   stakeholders: "",
   assignedTo: "",
  
 });

 const titleRef = useRef(null);
 const descriptionRef = useRef(null);
 const objectiveRef = useRef(null);
 const stakeholdersRef = useRef(null);
 const assignedToRef = useRef(null);

 const fileInputRef = useRef(null);

 const handleChange = (e) => {
   setFormData((prevData) => ({
     ...prevData,
     [e.target.name]: e.target.value,
   }));
 };
 const [image , setImage]=useState(null)

 const handleSubmit = (e) => {
   e.preventDefault();
   const projectData={
      ...formData,
      longitude:userLocation?.longitude,
      latitude:userLocation?.latitude,
      projectModel:image, 
   }
   console.log(projectData)
   dispatch(postProject(projectData,navigate));
   console.log("submitted...");
 };


    return (
        <>
         <div className="bg-kaddu-200 w-screen h-[600px] md:w-[500px] rounded-xl shadow-2xl p-4"  style={{ backgroundImage: `url(${bgImg})` }}>
         <div className= ""><IoMdCloseCircle className="w-10 h-10 absolute top-2 right-2" onClick={()=> close()}/></div>
          <div className="flex flex-col justify-between items-center h-full ">
            <div className="font-bold text-3xl text-center">New Project</div>
                <div className='flex flex-col  w-full '>
                     <div>
                        <div>Title:</div>
                        <div className=" w-full rounded-lg">
                        <input 
                           className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 '
                           type="text" 
                           placeholder="title"
                           ref={titleRef}
                           name="title"
                           onChange={handleChange}
                        ></input></div>
                     </div>
                     <div>
                        <div>Description</div>
                        <div className="w-full rounded-lg">
                        <textarea 
                        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 "
                        type="text" placeholder="Description "
                        ref={descriptionRef}
                        name="description"
                        rows={3}
                        onChange={handleChange}></textarea></div>
                     </div>
                     
                     <div>
                        <div>Objective</div>
                        <div className=" w-full rounded-lg">
                        <textarea 
                        type="text" 
                        placeholder="Objective"
                        className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 '
                        ref={objectiveRef}
                        name="objective"
                        rows={3}
                        onChange={handleChange}></textarea></div>
                     </div>
                     <div>
                        <div>Stack Holders :</div>
                        <div className="w-full rounded-lg">
                        <input 
                        className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600'
                        type="text" 
                        placeholder="Address"
                        ref={stakeholdersRef}
                        name="stakeholders"
                        onChange={handleChange}></input></div>
                     </div>
                     <div>
                        <div>Assigned to :</div>
                        <div className="w-full rounded-lg">
                        <input 
                        className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600'
                        type="text" 
                        placeholder="Address"
                        ref={assignedToRef}
                        name="assignedTo"
                        onChange={handleChange}></input></div>
                     </div>
                     <div className="flex py-4 items-center">
                        <div className='w-[120px]'>Cover Image :</div>
                        <input type="file" 
                        className=" hidden"
                        ref={fileInputRef}
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}/>
                        <img 
                        className="h-12 w-12 cursor-pointer " 
                        onClick={()=>fileInputRef.current.click()}
                        src={addImage}>
                        </img>
                     </div>
                </div>
            <div className=''>
               <div>
                  <form onSubmit={handleSubmit}>
                     <button className='bg-black text-white rounded-2xl m-2 p-2 px-4'>Create</button>
                  </form>
               </div>
            </div>
          </div>
          </div>
        </>
    );
};

export default NewProject;
