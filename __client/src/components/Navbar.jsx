import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        // Update state when LocalStorage changes
        const storedToken = localStorage.getItem('token');
        if (storedToken !== token) {
        setToken(storedToken);
        }
    }, [localStorage, token]); // Run effect if localStorage or token changes

    const handleClick = () => {
        localStorage.clear();
        setToken(null); // Update state after clearing LocalStorage
    };

    return (<nav className="flex justify-around items-center m-0">
        <div className="flex flex-row items-center justify-center">
            <img src={logo} alt="" className="brand m-0" width={50}/>
            <h2 className="font-thin text-blue-800 text-2xl">WANDERHUB</h2>
        </div>

        <ul className="flex flex-row items-center">
            <Link to="/" className="hover:bg-blue-500 py-5 px-12 hover:text-white transition-[500ms] cursor-pointer font-thin">Home</Link>
            <Link to="/explore" className="hover:bg-blue-500 py-5 px-12 hover:text-white transition-[500ms] cursor-pointer font-thin">Explore</Link>
            <Link to="/forum" className="hover:bg-blue-500 py-5 px-12 hover:text-white transition-[500ms] cursor-pointer font-thin">Forum</Link>
            <Link to="/events" className="hover:bg-blue-500 py-5 px-12 hover:text-white transition-[500ms] cursor-pointer font-thin">Events</Link>
        </ul>

        <div className="flex flex-row gap-4">
            {!token ? (<>
                <Link to="/signin" className="px-5 py-3 hover:text-blue-500 transition-[500ms]">
                Sign in
            </Link>
            
            <Link to="/signup" className="bg-blue-500 px-5 py-3 rounded-md text-white hover:bg-blue-800 transition-[500ms]">
                Register
            </Link>
            </>) : <button className="bg-red-500 px-5 py-3 rounded-md text-white" onClick={handleClick}>
                Close Session
            </button>}
        </div>
        
        {/* <div className="bg-slate-200 w-[50px] h-[50px] rounded-full"></div> */}
    </nav>);
}
 
export default Navbar;