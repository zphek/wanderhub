import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sendReq from "../helpers/sendReq";
import Page404 from "./Page404";
import Post from "../components/Post";

const User = () => {
    const {username} = useParams();
    const [info, setInfo] = useState({});
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        sendReq(`http://localhost:3000/v1/user/getUserBy/${username}`)
        .then(response=>{
            if(response){
                const {data} = response;
                setInfo(data);
            } 
            
        }).catch(err=>{
            console.log(err);
        })

        sendReq(`http://localhost:3000/v1/post/getPostsBy/${username}`)
        .then(response=>{
            if(response){
                const {data} = response;
                setPosts(data[0]);
            }
        })
    }, [])

    return (<>{info ? <section className="min-h-screen">
        <section className="h-[100%] w-screen flex flex-col justify-center items-center">
            <div className="w-full bg-blue-500 flex justify-center py-6">
                <div className="w-[60%] flex items-center gap-x-4">
                        <div className="min-h-36 min-w-36 rounded-full bg-slate-400"></div>
                        <div>
                            <h2 className="text-5xl font-Abgalumo text-white font-bold">{info.FULL_NAME}</h2>
                            <h3 className="text-white text-xl font-bold">@{info.USERNAME}</h3>
                            <p className="text-white text-lg mt-2">
                             ¡Hola, aventureros! Soy {username}, un apasionado de la exploración y la curiosidad sin límites. 🗺️✨ Desde mi rincón del mundo, comparto historias fascinantes sobre mis viajes, descubrimientos y experiencias únicas.
                            </p>
                        </div>
                </div>
            </div>

            <section className="h-[100%] w-[60%] mt-5">
                <h2 className="font-bold text-4xl">Recent posts</h2>
                {posts.map(ele=><Post data={ele}/>)}
            </section>

        </section>
    </section> : <Page404/>}</>);
}
 
export default User;