import Mypost from '../assets/mobile_mypost_icon.svg'; 
import Home from '../assets/mobile_home_icon.svg'; 
import GovtProject from '../assets/mobile_project_icon.svg'; 
import Search from '../assets/search_icon.svg'
import Profile from '../assets/profile_icon.svg'
import Doodle from '../assets/Doodle.svg'
import { useNavigate } from 'react-router';
import { useState } from 'react';


const PhoneNavbar = () =>{
    const navigate=useNavigate()
    const [isInputOpen, setisInputOpen]=useState(false)
    
    const handelClick=()=>{
        setisInputOpen((perv)=>!perv);
    }
    return (

        <> 
            <div className='w-full z-50'>
            
            {isInputOpen && <div className='fixed bottom-16 w-full p-4 z-50'>
                <div className='w-full z-50'>
                    <input className='w-full rounded-xl p-2 px-4 z-50 border-2 font-semibold' type="text" name="" id="" placeholder='Search Here ....' />
                </div>
            </div>
            }
           <div className='px-2 flex justify-between items-center bg-kaddu-100 fixed bottom-0 w-full z-50' style={{ backgroundImage: `url(${Doodle})` }}>
            <div><img className='h-15 w-12' src = {Home} onClick={()=>(navigate("/"))}/></div>
            <div><img className='h-15 w-12' src = {Search} onClick={handelClick}/></div>
            <div><img className='h-15 w-12' src = {GovtProject} onClick={()=>(navigate("/govt-projects"))}/></div>
            <div><img className='h-15 w-12' src = {Profile} onClick={()=>(navigate("/profile"))} /></div>
            <div><img className='h-15 w-12' src = {Mypost} onClick={()=>(navigate("/detail"))}/></div>
           </div>
           </div> 
        </>

    );
};

export default PhoneNavbar ;