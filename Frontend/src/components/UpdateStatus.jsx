import Popup from "reactjs-popup"
import bgImg from '../assets/signup_doodle.svg'


const Update = ({close}) => {
   return (
    <>
        <div className="bg-kaddu-200 shadow-lg h-[300px] w-[450px] rounded-xl shadow-lg" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="font-bold text-3xl flex justify-center m-5 p-2">Update Status</div>
        <div className="flex justify-center font-bold text-xl p-3"><input type="radio" value="Male" name="gender" /> Initiated</div>
       <div className="flex justify-center font-bold text-xl p-3"><input type="radio" value="Male" name="gender" /> Planned</div>
       <div className="flex justify-center font-bold text-xl p-3"><input type="radio" value="Male" name="gender" /> Executed</div>
       <div className="flex justify-center font-bold text-xl p-3"><input type="radio" value="Male" name="gender" /> Completed</div>
      </div>
    </>
   );
};

export default Update ;