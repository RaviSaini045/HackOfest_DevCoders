import { useState } from 'react';
import addImage from '../assets/addImage_icon.svg'

const NewProject = () => {

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

 const handleChange = (e) => {
   setFormData((prevData) => ({
     ...prevData,
     [e.target.name]: e.target.value,
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(setSignupData({formData,avatar}));
   dispatch(sendOTP(formData.email,navigate));
   console.log("submitted...");
   setOpen(false); // Close the Register popup
   setOtpOpen(true); // Open the OTP Page popup
 };


 const [projectModel,setProjectModel]=useState(null)
    return (
        <>
          <div className="bg-pink-300">
            <div className="font-bold text-3xl">New Project</div>
            <div>
                <div>
                     <div>
                        <div>Title</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="title"
                         ref={titleRef}
                         name="title"
                         onChange={handleChange}
                        ></input></div>
                     </div>
                     <div>
                        <div>Description</div>
                        <div className="bg-white w-[200px] rounded-lg"><input 
                        type="text" placeholder="Description "
                        ref={descriptionRef}
                        name="description"
                        onChange={handleChange}></input></div>
                     </div>
                     
                     <div>
                        <div>Objective</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"
                        ref={objectiveRef}
                        name="objective"
                        onChange={handleChange}></input></div>
                     </div>
                     <div>
                        <div>Stack Holders :</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"
                        ref={stakeholdersRef}
                        name="stakeholders"
                        onChange={handleChange}></input></div>
                     </div>
                     <div>
                        <div>Assigned to :</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"
                        ref={assignedToRef}
                        name="assignedTo"
                        onChange={handleChange}></input></div>
                     </div>
                     <div className="flex">
                        <div>Cover Image :</div>
                        <img className="h-12 w-12 fixed" src={addImage}></img>
                        <input type="file" 
                        className="opacity-0"
                        onChange={(e) => {
                            setAvatar(e.target.files[0]);
                        }}/>
                     </div>
                </div>
            </div>
            <div>
               <div >
                  <form onSubmit={handleSubmit}><button className='bg-black text-white rounded-lg m-2 p-2'>Create</button></form></div>
            </div>
          </div>
        </>
    );
};

export default NewProject;
