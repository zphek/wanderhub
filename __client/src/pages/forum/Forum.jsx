import search from "../../assets/search.png";
import forum from "../../assets/foro.png";
import opciones from "../../assets/opciones.png";
import Discussion from "../../components/Discussion";
import Agregar from "../../assets/agregar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NewDiscussion from "./NewDiscussion";
import { useEffect, useState } from "react";
import sendReq from "../../helpers/sendReq";

const Forum = () => {
    const [window, setWindow] = useState(false);
    const [discussions, setDiscussions] = useState([]);
    const [filtered, setFiltered] = useState(0);

    useEffect(() => {
        sendReq("http://localhost:3000/v1/discussion/getDiscussions")
            .then(({data}) => {
                setDiscussions(data.reverse());  // Spread the previous state correctly
                console.log(data);
            });
    }, []);

    return (<>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-blue-600 text-5xl font-extrabold mt-3">Wanderhub discussions</h2>
            <h3 className="mt-4 text-blue-slate-500 text-xl">Explora y comparte tus experiencias de viaje</h3>
            <div className="mt-2 w-[25%] mt-5 mb-5 shadow-xl border-2 border-slate-200 rounded-lg flex flex-row flex-grow">
                <input type="text" name="" id="" className="outline-none py-3 px-5 grow text-slate-500 text-xl" placeholder="Ingresa tu duda sobre viajes"/>
                <button className="p-4"><img src={search} alt="" className="h-7 w-7"/></button>
            </div>
        </div>

        <section className="min-h-[74vh] bg-blue-500 flex justify-center">
            <section className="w-[80%] flex flex-col justify-center">
                <div className="flex flex-row justify-between mt-8 items-center">
                    <div className="flex flex-row gap-x-2 items-center">
                        <img src={forum} alt="" className="h-8 w-8"/>
                        <h2 className="text-white font-extrabold text-lg">WanderHub community</h2>
                        <h2 className="text-white text-lg">{'>'} WanderHub discussions</h2>
                    </div>

                    {localStorage.getItem("token") && <button className="outline-none flex items-center gap-x-2 text-white font-extrabold" onClick={e=>{
                        setWindow(true);
                    }}>
                        <FontAwesomeIcon icon={faPlusCircle} size="lg"/>
                        <h2>New discussion</h2>
                    </button>}
                </div>
                
                <div className="discussions flex flex-row flex-wrap mt-6 gap-x-8 gap-y-8 items-start flex-grow mb-8">
                    {discussions.length > 0 ? (
                        discussions.map(ele=> {
                        return <Discussion key={ele.ID_DISCUSSION} data={ele} setDiscussion={setDiscussions}/>})
                    ) : (
                        <h2 className="mt-5 w-[100%] text-center text-xl text-white font-bold">There's no discussions.</h2>
                    )}  
                </div>

                <button className="flex flex-row justify-center items-center gap-x-3 mb-5 text-center">
                    <img src={Agregar} alt="" className="h-8 w-8"/>
                    <h3 className="text-white font-extrabold">Ver más</h3>
                </button>
            </section>
        </section>

        {window && <NewDiscussion setWindow={setWindow} />}

    </>);
}
 
export default Forum;