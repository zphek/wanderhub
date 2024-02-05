import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../components/Post";
import { faClipboard, faClipboardCheck, faPaperPlane, faPaperclip, faPenClip } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import sendReq from "../helpers/sendReq";

const Feed = () => {
    const [counter, setCounter] = useState(0);
    const description = useRef();
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState({
        ID_USER: "",
        EMAIL: "",
        USERNAME: "",
        FULL_NAME: "",
        URL_IMAGE: ""
    });

    function handleChange(e){
        setCounter(e.target.value.length);
    }

    function handleSubmit(e){
        e.preventDefault();

        sendReq("http://localhost:3000/v1/post/createPost", "post", {CAPTION:description.current.value}, localStorage.getItem("token"))
        .then(response=>{
            if(!response){
                alert("error");
                return;
            }

            const {data} = response;
            console.log(data)

            setPosts((prevPosts) => [data, ...prevPosts]);
        });
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
          sendReq("http://localhost:3000/v1/user/getUser", "get", null, localStorage.getItem("token"))
            .then(({ data }) => {
              setInfo(data);
              console.log(data);
            });
        }
    
        sendReq("http://localhost:3000/v1/post/getPosts", "get", null)
          .then(({ data }) => {
            console.log(data[0]);
            // Reverse the posts array to display newest first
            setPosts(data[0].reverse());
          });
      }, []);

    return (<div className="min-h-screen w-screen bg-blue-400 flex flex-col items-center pb-10">
        <div className="create-post bg-white w-screen bg-white py-3 px-2 flex flex-col items-center">
            {localStorage.getItem("token") ? <><div className="w-[60%] flex gap-x-3 mt-5">
                <div className="min-h-20 min-w-20 rounded-full bg-slate-300">

                </div>

                <div>
                    <div className="flex items-center gap-x-2 mb-2">
                        <h2 className="text-xl">{info.FULL_NAME}</h2>
                        <h2 className="text-lg text-slate-500">@{info.USERNAME}</h2>
                    </div>
                    <h6 className="py-3 px-2 rounded-full bg-blue-800 text-white text-xs text-center inline-block">Entusiasta</h6>
                </div>
            </div>

            <form className="flex flex-col w-[60%] mt-5" onSubmit={handleSubmit}>
                <textarea name="" id="" cols="30" rows="5" placeholder="Write your thoughts..." className={`rounded-lg border-2 border-slate-400/40 py-4 px-4 ${counter > 1500 ? "text-red-500" : ""}`} onChange={handleChange} ref={description} required></textarea>
                <div className="flex justify-between mt-4 items-center">
                    
                    <h2 className={`${counter > 1500 ? "text-red-500" : ""}`}><strong>{counter}</strong>/1500</h2>

                    <div>
                        <button className="bg-blue-500 rounded-xl text-white px-4 py-2 mr-2" type="submit">Post <FontAwesomeIcon icon={faPaperPlane}/></button>
                        <button className="text-blue-500 px-4 py-2"><FontAwesomeIcon icon={faPaperclip} size="lg"/></button>
                    </div>
                </div>
            </form></> : 
            <h2 className="font-extrabold text-4xl font-Abgalumo w-[60%] py-4">RECENT POSTS</h2>}
        </div>

        
        <div className="posts w-[60%] flex flex-col items-center">
            {info ? posts.map(ele=><Post key={ele.ID_POST} data={ele}/>) : <h2>There's no posts.</h2>}
        </div>
    </div>);
}
 
export default Feed;