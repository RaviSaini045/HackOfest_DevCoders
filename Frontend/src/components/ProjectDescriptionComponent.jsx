import bgImg from '../assets/signup_doodle.svg'
import sidebar from "../assets/detail_side_bar3.svg"

const ProjectDescription = ({close}) => {
    return (
        <>
          <div className="bg-kaddu-200 w-2/3 p-5 rounded-3xl items-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="text-3xl font-bold flex justify-center p-3"><h1>Project Details</h1></div>
            <div className='flex '>
            <div className='p-10 w-2/3'>
                <div >
                    <div className='font-bold text-xl'>Title :</div>
                    <div className="  rounded-lg"><p>Lorem ipsum dolor sit amet consectetur.</p></div>
                    </div>
                    <div>
                    <div className='font-bold text-xl'>Description :</div>
                    <div className="  rounded-lg"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vel quasi magnam laudantium quos illo harum quidem maxime atque molestiae modi asperiores alias dolores, quae repellat eligendi nihil corporis cum fugit, eaque dolore ipsa natus. Eligendi, sint dolore ipsam, deserunt repudiandae quos cum totam architecto eius quis voluptatem. Dolorum, earum placeat necessitatibus quidem tempore, debitis deleniti, distinctio iste dolore at consectetur incidunt doloremque ipsam repellat cumque ad eos impedit obcaecati aperiam deserunt sed! Est doloribus nam vel sunt.</p></div>
                    </div>
                    <div>
                    <div className='font-bold text-xl'>Objective :</div>
                    <div className="rounded-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet exercitationem sequi impedit magnam tenetur nam obcaecati. Labore quae perferendis facere iure accusantium.</p></div>
                    </div>
                    <div>
                    <div className='font-bold text-xl'>Stack Holders :</div>
                    <div className=" rounded-lg"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
                    </div>
                    <div>
                    <div className='font-bold text-xl'>Assigned to :</div>
                    <div className="rounded-lg"><p>Lorem ipsum dolor sit.</p></div>
                    </div>
                </div>
                <div>
                    <img src={sidebar} alt="" />
                </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-kaddu-400 p-2 text-2xl rounded-xl  text-white font-bold'>Done</button>
                </div>
                
          </div>
        </>
    );
};

export default ProjectDescription;