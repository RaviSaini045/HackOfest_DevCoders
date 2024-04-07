import Mypost from '../assets/mobile_mypost_icon.svg'; 
import Home from '../assets/mobile_home_icon.svg'; 
import GovtProject from '../assets/mobile_project_icon.svg'; 
import Search from '../assets/search_icon.svg'
import Profile from '../assets/profile_icon.svg'
import Doodle from '../assets/Doodle.svg'

const PhoneNavbar = () =>{
    return (
        <>
           <div className='flex justify-between bg-kaddu-100 fixed bottom-0 w-full' style={{ backgroundImage: `url(${Doodle})` }}>
            <div><img className='h-20 w-20' src = {Home}/></div>
            <div><img className='h-20 w-20' src = {Search}/></div>
            <div><img className='h-20 w-20' src = {GovtProject}/></div>
            <div><img className='h-20 w-20' src = {Profile}/></div>
            <div><img className='h-20 w-20' src = {Mypost}/></div>
           </div>
        </>

    );
};

export default PhoneNavbar ;