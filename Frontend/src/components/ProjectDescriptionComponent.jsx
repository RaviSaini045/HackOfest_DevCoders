import bgImg from '../assets/signup_doodle.svg'
import sidebar from "../assets/detail_side_bar3.svg"

const ProjectDescription = ({close}) => {
    return (
        <>
        <div className="bg-kaddu-200 w-full md:w-[750px] h-[80%] p-4 rounded-3xl " style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='flex flex-col justify-center items-center overflow-y-auto'>
                <div className=" text-2xl md:text-3xl font-bold flex justify-center py-2"><h1>Project Details</h1></div>
                <div className='flex justify-between overflow-y-auto'>
                    <div className='p-2 h-[500px] w-full'>
                        <div className=''>
                            <div >
                                <div className='font-bold text-base md:text-lg'>Title :</div>
                                <div className="text-sm md:text-base rounded-lg"><p>Lorem ipsum dolor sit amet consectetur.</p></div>
                            </div>
                            <div>
                                <div className='font-bold text-sm md:text-lg'>Description :</div>
                                <div className="text-sm md:text-base rounded-lg"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vel quasi magnam laudantium quos illo harum quidem maxime atque molestiae modi asperiores alias dolores, quae repellat eligendi nihil corporis cum fugit, eaque dolore ipsa natus. Eligendi, sint dolore ipsam, deserunt repudiandae quos cum totam architecto eius quis voluptatem. Dolorum, earum placeat necessitatibus quidem tempore, debitis deleniti, distinctio iste dolore at consectetur incidunt doloremque ipsam repellat cumque ad eos impedit obcaecati aperiam deserunt sed! Est doloribus nam vel sunt.</p></div>
                            </div>
                            <div>
                                <div className='font-bold text-sm md:text-lg'>Objective :</div>
                                <div className="text-sm md:text-base rounded-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet exercitationem sequi impedit magnam tenetur nam obcaecati. Labore quae perferendis facere iure accusantium.</p></div>
                            </div>
                            <div>
                                <div className='font-bold text-sm md:text-lg'>Stack Holders :</div>
                                <div className=" text-sm md:text-base rounded-lg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                            </div>
                            <div>
                                <div className='font-bold text-sm md:text-lg'>Assigned to :</div>
                                <div className="text-sm md:text-base rounded-lg"><p>Lorem ipsum dolor sit.</p></div>
                            </div>

                        </div>
                    </div>
                    <div className='p-4'>
                        <img src={sidebar} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center my-2'>
                    <button className='bg-kaddu-400 p-2 text-xl rounded-xl  text-white ' onClick={()=>close()}>Done</button>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default ProjectDescription;