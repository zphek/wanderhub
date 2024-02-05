import image from "../assets/travel.jpg";
import clockLogo from "../assets/reloj.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown, faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import obtenerTiempo from "../helpers/getTime";
import { Link } from "react-router-dom";

const Post = ({data}) => {
    const {CAPTION, USERNAME, FULL_NAME, createdAt} = data;
    const [Class, setClass] = useState("fadeIn");

    useEffect(()=>{
        setTimeout(()=>{
            setClass("")
        }, 1000);
    }, [])

    return (<div className={`flex flex-col mt-5 bg-white rounded-xl min-w-[55rem] shadow-lg ${Class}`}>
        
        <div className="mb-2 pl-4 pt-4 flex">
            <h2 className="px-4 py-2 bg-blue-500 flex items-center font-bold text-white rounded-xl gap-x-2">
                <FontAwesomeIcon icon={faClock} size="xl"/>
                <h2 className="bg-blue-500">
                    {obtenerTiempo(createdAt)}
                </h2>
            </h2>
        </div>
        
        <p className="px-4 pt-4">{CAPTION}</p>
        <header className="flex flex-row gap-x-6 px-4 py-3 border-t-2 border-slate-500/20 mt-3 justify-between items-center">
            <Link to={`user/${USERNAME}`} className="flex gap-x-3">
                <div className="w-[50px] h-[50px] rounded-full bg-slate-300"></div>
                <div>
                    <div className="flex gap-x-3">
                        <h1 className="font-Abgalumo">
                            {FULL_NAME}
                        </h1>

                        <h2>
                            @{USERNAME}
                        </h2>
                    </div>
                    <h1 className="text-slate-500">
                        Post
                    </h1>
                </div>
            </Link>

            { localStorage.getItem("token") && <div className="flex gap-x-4 items-center">
                <FontAwesomeIcon icon={faHeart} size="xl" className="text-blue-500 hover:text-red-500 cursor-pointer transition-[400ms]"/>
                <FontAwesomeIcon icon={faThumbsDown} size="xl" className="text-blue-500"/>
            </div>}
        </header>


    </div>);
}
 
export default Post;