import Popup from "reactjs-popup"
import bgImg from '../assets/signup_doodle.svg'


const Update = ({close,setProjectStatus}) => {

  const handelChange=(e)=>{
    setProjectStatus(e.target.value);
  }
   return (
    <>
        <div className="bg-kaddu-200 w-full h-[300px] md:w-[450px] rounded-xl shadow-lg" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="font-bold text-3xl flex justify-center m-5 p-2">Update Status</div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl p-2"><input id="Intiated" type="radio" value="initiated" name="status" onChange={handelChange} /> <label htmlFor="Intiated">Intiated</label></div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl p-2"><input id="Planned" type="radio" value="planned" name="status" onChange={handelChange}/> <label htmlFor="Planned">Planned</label></div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl p-2"><input id="Executed"  type="radio" value="executed" name="status" onChange={handelChange}/> <label htmlFor="Executed">Executed</label></div>
            <div className="flex justify-center items-center gap-2 font-bold text-xl p-2"><input id="Completed"  type="radio" value="completed" name="status" onChange={handelChange}/> <label htmlFor="Completed">Completed</label></div>
      </div>
    </>
   );
};

export default Update ;