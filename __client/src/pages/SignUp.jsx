import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import sendReq from "../helpers/sendReq";

const SignUp = () => {
    let [state, setState] = useState({error: false, message: ""});
    let [formData, setFormData] = useState({
        username: null,
        password: null,
        url_image: "lol"
    });
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        sendReq("http://localhost:3000/v1/user/createUser", "post", formData)
        .then(response=>{
            console.log(response);
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
        <div className="md:w-[50%] lg:w-[30%] w-[100%] h-[40em] rounded-xl p-9 flex flex-col justify-center">
            <header className="flex flex-row items-center justify-center">
                <img src={logo} alt="" width={60}/>
                <h1 className="text-blue-500 font-thin text-3xl lg:text-4xl">WANDERHUB</h1>
            </header>

            <h2 className="flex flex-row text-left lg:text-4xl text-3xl text-blue-800 mt-6 font-bold border-b-2 border-slate-400/50 py-3">REGISTER ACCOUNT</h2>

            <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                <h2 className="font-bold font-Abgalumo text-lg text-slate-500 mt-5">Email</h2>
                <input className="py-2 px-4 outline-none border-b-2 border-b-slate-400 text-[1.1em] bg-slate-100 rounded-md" type="text" name="username" id="" placeholder="Enter your email..." onChange={handleChange}/>
                
                <h2 className="mt-3 font-Abgalumo text-slate-500 font-bold">Password</h2>
                <input className="py-2 px-4 outline-none border-b-2 border-b-slate-400 text-[1.1em] bg-slate-100 rounded-md" type="password" name="password" id="" placeholder="Enter your password..." onChange={handleChange}/>
                            
                <h2 className="mt-3 font-Abgalumo text-slate-500 font-bold">Repeat password</h2>
                <input className="py-2 px-4 outline-none border-b-2 border-b-slate-400 text-[1.1em] bg-slate-100 rounded-md" type="password" name="password" id="" placeholder="Repeat password..." onChange={handleChange}/>

                <button className="bg-blue-800 text-xl py-2 rounded-md text-white hover:bg-blue-900 transition-[300ms] mt-3 font-bold">Sign up</button>
                <h3 className="text-slate-500 text-md">Have account? <Link to="/signin" className="font-bold">Log in</Link></h3>
                <Link to="/" className="text-xl text-center bg-slate-100 py-3 text-base hover:bg-slate-500 hover:text-white rounded-md transition-[600ms]">Back to home</Link>
            </form>
        </div>
    </div>);
}
 
export default SignUp;