import discussionLogo from "../assets/conversacion.png";
import commentLogo from "../assets/comments.png";
import clockLogo from "../assets/reloj.png";
import { Link } from "react-router-dom";
import obtenerTiempo from "../helpers/getTime";

const Discussion = ({ data }) => {
    return (
        <Link to={`/discussion/${data.ID_DISCUSSION}`} className="bg-white w-[20em] shadow-md shadow-slate-200 px-4 py-2 grow rounded-lg">
            <img src={discussionLogo} alt="" className="h-15 w-15" />
            <h2 className="text-xl text-blue-500 font-extrabold">{data.DISCUSSION_TOPIC}</h2>
            <p className="text-md text-slate-500 h-40 overflow-y-hidden overflow-ellipsis break-words mb-2" style={{textAlign:"justify"}}>
                {data.CAPTION}
            </p>

            <div className="border-t-2 border-slate-300 flex justify-between">
                <div className="flex gap-x-1 items-center justify-center mt-2">
                    <img src={commentLogo} alt="" className="h-6 w-6" />
                    <h3 className="text-md text-slate-400">105</h3>
                </div>

                <div className="flex gap-x-1 items-center justify-center mt-2">
                    <img src={clockLogo} alt="" className="h-6 w-6" />
                    <h3 className="text-md text-slate-400">{obtenerTiempo(data.createdAt)}</h3>
                </div>
            </div>
        </Link>
    );
};

 
export default Discussion;