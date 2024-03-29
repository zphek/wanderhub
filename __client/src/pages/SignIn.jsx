import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import sendReq from "../helpers/sendReq";

const SignIn = () => {
    let navigate = useNavigate();
    let [state, setState] = useState({error: false, message: ""});
    let [formData, setFormData] = useState({
        username: null,
        password: null
    });
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        sendReq("http://localhost:3000/v1/user/signin", "post", formData)
        .then(({data})=>{
            console.log(data);
            if(data.auth){
                localStorage.setItem("token", data.token);
                localStorage.setItem("auth", true);
                navigate("/");
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const handleChange = (e)=>{
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }

    return (<div className="h-screen w-screen flex flex-row items-center justify-center ">
        <div className="md:w-[50%] lg:w-[30%] w-[100%] h-[40em] rounded-xl p-9 flex-col  justify-center">
            <header className="flex flex-row items-center justify-center">
                <img src={logo} alt="" width={60}/>
                <h1 className="text-blue-500 font-thin text-3xl lg:text-4xl">WANDERHUB</h1>
            </header>

            <h2 className="flex flex-row text-left lg:text-4xl text-3xl text-blue-800 mt-6 font-bold border-b-2 border-slate-400/50 py-2">SIGN IN</h2>

            <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <h2 className="font-bold font-Abgalumo text-lg text-slate-500 mt-5">Email</h2>
                <input className="py-2 px-4 outline-none border-b-2 border-b-slate-400 text-[1.1em] bg-slate-100 rounded-md" type="text" name="username" id="" placeholder="Enter your email..." onChange={handleChange} required/>
                
                <h2 className="mt-3 font-Abgalumo text-slate-500 font-bold">Password</h2>
                <input className="py-2 px-4 outline-none border-b-2 border-b-slate-400 text-[1.1em] bg-slate-100 rounded-md" type="password" name="password" id="" placeholder="Enter your password..." onChange={handleChange} required/>
                            
                <button className="bg-blue-800 text-xl py-2 rounded-md text-white hover:bg-blue-900 transition-[300ms] mt-3 font-bold">Sign in</button>
                <h3 className="text-slate-500 text-md">Don't have account? <Link to="/signup" className="font-bold">Register</Link></h3>
                <Link className="text-blue-500 font-bold">Forgot password?</Link>
                <Link to="/" className="text-xl text-center bg-slate-100 py-3 text-base hover:bg-slate-500 hover:text-white rounded-md transition-[600ms]">Back to home</Link>
            </form>
        </div>
    </div>);
}
 
export default SignIn;