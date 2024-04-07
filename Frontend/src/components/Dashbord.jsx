import Profile from "../assets/profile_icon.svg"
import Plant from "../assets/Plant_2.svg"
import Doodle from '../assets/Doodle.svg'; 

const Dashbord = () => {
    return (
        <>
          <div className="  h-screen">
                <div className='flex text-center'>
                        <div><img className="w-40 h-40" src={Profile}></img> </div>
                        <div className="pt-3 pb-3">
                            <div className="text-5xl">Alexendra Dardio</div>
                            <div className="text-5xl">@husnpari</div>
                        </div>
                </div>
                <div className="p-20 grid grid-cols-2 gap-6 place-content-center">
                     <div className="p-1">
                        <div>Full Nmae</div>
                        <div ><input className="bg-pink-200 rounded-lg text-3xl" type="text"></input></div>
                     </div>
                     <div className="p-1">
                        <div>Email</div>
                        <div ><input className="bg-pink-200 rounded-lg text-3xl" type="email"></input></div>
                     </div>
                     <div className="p-1">
                        <div>User Name</div>
                        <div ><input className="bg-pink-200 rounded-lg text-3xl" type="text"></input></div>
                     </div>
                     <div className="p-1">
                        <div>Address</div>
                        <div ><input className="bg-pink-200 rounded-lg text-3xl" type="text"></input></div>
                     </div>
                     <div className="p-1">
                        <div>Password</div>
                        <div ><input className="bg-pink-200 rounded-lg text-3xl" type="password"></input></div>
                     </div>
                     
                </div>
                <div className="text-center">
                    <button className="bg-black rounded-2xl m-2 p-2 text-white text-3xl item-center">Save</button>
                </div>
                <div className="absolute bottom-5 right-5">
                    <img className="h-[175px] w-[175px]" src={Plant}></img>
                </div>
          </div>
        </>
    );
};

export default Dashbord ;