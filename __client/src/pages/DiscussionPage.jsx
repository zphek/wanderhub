import { faArrowLeft, faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sendReq from "../helpers/sendReq";
import Page404 from "./Page404";
import Comment from "../components/Comment";

const DiscussionPage = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({});
    const [userData, setUserData] = useState({
        ID_USER: "",
        EMAIL: "",
        USERNAME: "",
        FULL_NAME: "",
        URL_IMAGE: ""
    });
    const [comments, setComments] = useState([]);
    const description = useRef();
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        if (localStorage.getItem("token")) {
            sendReq("http://localhost:3000/v1/user/getUser", "get", null, localStorage.getItem("token"))
              .then(({ data }) => {
                setUserData(data);
              });
        }
        
        sendReq(`http://localhost:3000/v1/discussion/getDiscussion/${id}`)
        .then(({data})=>{
            setInfo(data);
        })

        sendReq(`http://localhost:3000/v1/comment/getCommentsByPost/${parseInt(id)}`)
        .then(response=>{
            if(response){
                const {data} = response;
                setComments(data[0].reverse());
            }
            console.log(response)
        })

    }, [])

    function handleChange(e){
        setCounter(e.target.value.length);
    }

    function handleSubmit(e){
        e.preventDefault();

        sendReq("http://localhost:3000/v1/comment/createComment", "post", {description: description.current.value, ID_DISCUSSION:parseInt(id)}, localStorage.getItem("token"))
        .then(response=>{
            console.log(response);

            const info = {...response.data, USERNAME:userData.USERNAME, FULL_NAME:userData.FULL_NAME}

            setComments(prev=> [info, ...prev]);
        })
    }

    return (<>
        {info ? <section className="min-h-screen w-screen flex justify-center">
        <section className="h-full w-[50%]">
            <Link to="/forum" className="flex items-center gap-x-2 text-blue-600 mt-10">
                <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
                <h3 className="text-xl font-bold">Volver</h3>
            </Link>

            <h2 className="text-4xl mt-5 font-extrabold text-blue-600">
                {info.DISCUSSION_TOPIC}
            </h2>

            <p className="mt-5 text-lg text-gray-400 break-words pb-5 border-b-2 border-slate-500/20">
                {info.CAPTION}
            </p>

            {localStorage.getItem("token") && <div className="flex flex-col mt-5 gap-x-4 items-center border-t-2 border-slate-600/20 py-2">
                <div className="flex items-start w-[100%] items-center gap-x-2 mb-3">
                    <span className="min-w-12 min-h-12 bg-slate-500 rounded-full"></span>
                    <h2>{userData.FULL_NAME}</h2>
                    <h4 className="text-slate-500/50">@{userData.USERNAME}</h4>
                </div>
                <form className="flex flex-col w-[100%]" onSubmit={handleSubmit}>
                    <textarea name="" id="" rows="5" placeholder="Write your thougths..." className={`w-full rounded-lg px-4 py-2 border-2 border-slate-400/20 ${counter > 800 && "text-red-500"}`} onChange={handleChange} ref={description}></textarea>
                    <div className="flex justify-between h-full items-center gap-x-4 mt-3">
                        <button className="flex gap-x-2 items-center text-white bg-blue-500 px-4 py-2 rounded-lg" type="submit">
                            <h3 className="text-xl">Send</h3>
                            <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                        </button>

                        <h3 className={`text-xl ${counter > 800 && "text-red-500"}`}><strong>{counter}</strong>/800</h3>
                    </div>
                </form>
            </div>}

            <h2 className="text-2xl font-extrabold font-Abgalumo border-b-2 border-slate-400/50 py-5">Comments</h2>
            <div>
                {comments.map(ele => <Comment data={ele}/>)}
            </div>
        </section>
    </section> : <Page404/>}
    </>);
}
 
export default DiscussionPage;