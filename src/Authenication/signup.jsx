import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate=useNavigate();

    async function onclick(){
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/auth/signup/`,
            { email, password },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        alert('Signedup Successfully');
        navigate('/signin');
    }

    return(<div className="flex h-screen w-full justify-center items-center bg-[#050B18]">
        <div className="w-[400px] h-[250px] border-1 border-white rounded-md">
          <div className="flex justify-center font-bold text-white py-3  text-lg">Signup</div>
          <div className=" justify-center text-white">
            <div className=" w-[300px] rounded border-none gap-6 bg-[#0A192F] mx-10 my-3">
                <input placeholder="Email" className="h-[40px] w-[300px]" type="email" ref={emailRef}></input>
            </div>
            <br></br>
            <div className="w-[300px] bg-[#0A192F] mx-10">
                <input placeholder="Password" className="h-[40px] w-[300px]" type="password" ref={passwordRef}></input>
            </div>
          </div>
          <div className="flex justify-center my-4"><button className="text-white border-1 border-white w-[130px] rounded-md h-[35px]
          bg-blue-900 hover:bg-blue-700
          " onClick={onclick}>Signup</button>
          </div>
           <div className="text-white">Already have account,<b className="hover:text-blue-500"><button classname="bg-transparent" onClick={()=>{navigate('/signin');}}>Already have</button></b> </div>
          </div>
              </div>)
}