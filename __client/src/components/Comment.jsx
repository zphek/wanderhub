import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import obtenerTiempo from "../helpers/getTime";

const Comment = ({data}) => {
    let {URL_IMAGE, USERNAME, DESCRIPTION_C, LIKES, FULL_NAME, createdAt} = data;

    const [Class, setClass] = useState("fadeIn");

    useEffect(()=>{
        setTimeout(()=>{
            setClass("")
        }, 1000);
    }, [])

    return (<div className={`px-4 py-3 border-b-2 mt-3 border-slate-500/20 ${Class}`}>

        <div className="mb-5 flex">
            <h2 className="px-4 py-2 bg-blue-500 flex items-center font-bold text-white rounded-xl gap-x-2">
                <FontAwesomeIcon icon={faClock} size="xl"/>
                <h2 className="bg-blue-500">
                    {obtenerTiempo(createdAt)}
                </h2>
            </h2>
        </div>

        <div className="flex items-center gap-x-2">
            <span className="min-w-12 min-h-12 bg-slate-400 rounded-full"></span>
            <div>
                <h2 className="text-xl">{FULL_NAME}</h2>
                <h3 className="text-slate-400 text-lg">@{USERNAME}</h3>
            </div>
        </div>

        <p className="mt-3">
            {DESCRIPTION_C}
        </p>

        <div className="flex justify-around mt-5 text-blue-500">
            <h2><FontAwesomeIcon icon={faHeart}/> {LIKES}</h2>

            <button className="flex gap-x-2 items-center hover:text-red-500 transition-[400ms]">
                <FontAwesomeIcon icon={faHeart}/>
                <h2>Like</h2>
            </button>
        </div>
    </div>);
}
 
export default Comment;