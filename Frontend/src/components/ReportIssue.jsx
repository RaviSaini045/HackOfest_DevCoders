import { Toggle } from './Toggle'
import { BiSolidImageAdd } from "react-icons/bi";
import bgImg from '../assets/signup_doodle.svg'

const Report =()=>{
    const logState = state => {
        console.log('Toggled:', state)
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    anonymous: "",
    media: "",
   
  });

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const aadharCardRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(null);

   return (
    <>
      <div className="bg-kaddu-200 h-[400px] w-[800px] m-5 p-5 shadow-2xl rounded-lg" style={{ backgroundImage: `url(${bgImg})` }} > 
           <div className="font-bold text-3xl flex justify-center">Reoprt Issue</div>

           <div className='flex m-5 justify-center'>
            <div className='p-5'>Description</div>
            <div className='p-5'><textarea name="postContent" rows={4} cols={40} /></div>
           </div>

          
              <div className='flex justify-around'>
                  <div className='p-5'>
                      <Toggle
                          label="Send as Anonymous"
                          toggled={false}
                          onClick={logState}
                          />
                  </div>

                  <div className='p-3'>
                    <BiSolidImageAdd className='h-12 w-12'  onChange={function (e) {
                  setAvatar(URL.createObjectURL(e.target.files[0]));
                }} />
                  </div>

                      <div className='p-3'> 
                          <button className='bg-black rounded text-white m-2 p-2'>Post</button>
                      </div>
            </div>
          
      </div>
    </>
   );
};

export default Report ;