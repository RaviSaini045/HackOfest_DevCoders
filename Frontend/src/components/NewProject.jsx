import addImage from '../assets/addImage_icon.svg'

const NewProject = () => {
    return (
        <>
          <div className="bg-pink-300">
            <div className="font-bold text-3xl">New Project</div>
            <div>
                <div>
                     <div>
                        <div>Title</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="title"></input></div>
                     </div>
                     <div>
                        <div>Description</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Description "></input></div>
                     </div>
                     <div>
                        <div>Address</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"></input></div>
                     </div>
                     <div>
                        <div>Objective</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"></input></div>
                     </div>
                     <div>
                        <div>Stack Holders :</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"></input></div>
                     </div>
                     <div>
                        <div>Assigned to :</div>
                        <div className="bg-white w-[200px] rounded-lg"><input type="text" placeholder="Address"></input></div>
                     </div>
                     <div className="flex">
                        <div>Cover Image :</div>
                        <img className="h-12 w-12" src={addImage}></img>
                     </div>
                </div>
            </div>
            <div>
               <div ><button className='bg-black text-white rounded-lg m-2 p-2'>Create</button></div>
            </div>
          </div>
        </>
    );
};

export default NewProject;
