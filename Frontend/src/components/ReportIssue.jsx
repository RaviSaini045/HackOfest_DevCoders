import { Toggle } from "./Toggle";
import { BiSolidImageAdd } from "react-icons/bi";
import bgImg from "../assets/signup_doodle.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { postIssue } from "../services/operations/issueAPI";

const ReportIssue = ({close}) => {
  const userLocation = useSelector(state => state.auth.userLocation);
  const [isanonymous,setIsanonymous]=useState(false);
  const logState = (state) => {
    console.log("Toggled:", state);
    setIsanonymous(state)
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
  });

  const  descriptionRef= useRef(null);
  const anonymousRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleChange=(e)=>{
    setFormData((perv)=>({
      ...perv,
      [e.target.name]:e.target.value
    }))
  }

  const [image , setImage]=useState(null)


  const handleSubmit=()=>{
    const postIsuuedata={
      ...formData,
      longitude:userLocation?.longitude,
      latitude:userLocation?.latitude, 
      anonymous:isanonymous,
      media:image
    }
    console.log(postIsuuedata)
    dispatch(postIssue(postIsuuedata,navigate))

  }
  return (
    <>
      <div
        className="bg-kaddu-200 w-screen  h-[500px] md:h-[500px] md:w-[600px] md:m-5 p-2 shadow-2xl rounded-lg flex flex-row-reverse justify-between"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="relative">
          <IoMdCloseCircle
            className="w-10 h-10 absolute top-0 right-2"
            onClick={() => close()}
          />
        </div>
        <div className="w-full flex flex-col justify-between p-4 py-8 h-full">
        <div className="font-bold text-3xl flex justify-center">
          Reoprt Issue
        </div>

        <div className="md:flex flex-col space-y-4 w-full pr-2">
          <div className="pr-5 text-lg">Description:</div>
          <div className="w-full">
            <textarea
              className="block py-2 px-2 w-full text-base text-gray-900 bg-slate-300/5  border border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 "
              name="description"
              ref={descriptionRef}
              rows={4}
              placeholder="Write about the issus"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="md:flex flex-col justify-between md:items-start">
          <div className="my-4">
            <Toggle
              label="Send as Anonymous"
              toggled={false}
              onClick={logState}
            />
          </div>

          <div className="flex w-full justify-between p-4">
            <input type="file" 
              className=" hidden"
              ref={fileInputRef}
              onChange={(e) => {
                  setImage(e.target.files[0]);
            }}/>
            <BiSolidImageAdd
              className="h-12 w-12"
              onClick={()=> fileInputRef.current.click()}
            />
            <div className="">
              <button 
                className="bg-black rounded-full text-white  p-2 px-8"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default ReportIssue;
