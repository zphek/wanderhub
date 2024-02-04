import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../components/Post";
import { faClipboard, faClipboardCheck, faPaperPlane, faPaperclip, faPenClip } from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
    return (<div className="min-h-screen w-screen bg-blue-400 flex flex-col justify-center items-center pb-10">
        <div className="create-post bg-white w-screen bg-white py-3 px-2 flex flex-col items-center">
            <div className="w-[60%] flex gap-x-3 mt-10">
                <div className="min-h-20 min-w-20 rounded-full bg-slate-300">

                </div>

                <div>
                    <h2 className="text-xl">Bernardo Baez</h2>
                    <h6 className="py-3 px-2 rounded-full bg-blue-800 text-white text-xs text-center inline-block">Entusiasta</h6>
                </div>
            </div>

            <section className="flex flex-col w-[60%] mt-5">
                <textarea name="" id="" cols="30" rows="5" placeholder="Write your thoughts..." className="rounded-lg border-2 border-slate-400/40 py-4 px-4"></textarea>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 rounded-xl text-white px-4 py-2 mr-2">Post <FontAwesomeIcon icon={faPaperPlane}/></button>
                    <button className="text-blue-500 px-4 py-2"><FontAwesomeIcon icon={faPaperclip} size="lg"/></button>
                </div>
            </section>
        </div>

        
        <div className="posts w-[60%] flex flex-col items-center">
            <Post/>
            <Post/> 
            <Post/>
            <Post/>
        </div>
    </div>);
}
 
export default Feed;