import Profile from '../assets/profile_icon.svg'
import Delete from '../assets/delete_icon.svg'


const Comment = () => {
    return  (
        <>
           <div className='mt-5 mx-5 p-5 '>
                
                <div className='flex justify-between '>
                        <div className='flex items-center '>
                            <div><img src={Profile}></img> </div>
                            <div className='px-2 text-lg'>
                                <div>Alexendra Dardio</div>
                                <div>@husnpari</div>
                            </div>
                        </div>
                        <div><img src={Delete} className='w-7 h-7'></img></div>
                </div>
                
           
                <div className='m-2 ml-10'>
                     OMG!!!! It has to be fixed ASAP......Btw missing parni puri wale bhaiya
                </div>
           </div>
        </>
    );
};

export default Comment ;