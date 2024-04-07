import bgImg from '../assets/signup_doodle.svg'

const ProjectDescription = ({close}) => {
    return (
        <>
          <div className="bg-kaddu-200 w-[400px] h-[550px]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="text-3xl font-bold flex justify-center p-3"><h1>Project Details</h1></div>
            <div className="">
                <div>
                    <div>Title :</div>
                    <div className="bg-white w-[200px] rounded-lg"><input type="text"></input></div>
                    </div>
                    <div>
                    <div>Description :</div>
                    <div className="bg-white w-[200px] rounded-lg"><input type="text"></input></div>
                    </div>
                    <div>
                    <div>Objective :</div>
                    <div className="bg-white w-[200px] rounded-lg"><input type="text"></input></div>
                    </div>
                    <div>
                    <div>Stack Holders :</div>
                    <div className="bg-white w-[200px] rounded-lg"><input type="text"></input></div>
                    </div>
                    <div>
                    <div>Assigned to :</div>
                    <div className="bg-white w-[200px] rounded-lg"><input type="text"></input></div>
                    </div>
                </div>
                <div>
                    yha abhi prgress bar aayega.. !!!
                </div>
          </div>
        </>
    );
};

export default ProjectDescription;