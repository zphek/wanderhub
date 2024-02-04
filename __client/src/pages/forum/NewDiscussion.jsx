import { faClose, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NewDiscussion = ({setWindow}) => {
    const [counter, setCounter] = useState(0);
    const [formData, setFormData] = useState({
        topic: "",
        description: ""
    });

    function handleClick(e){
        setWindow(false);
    }

    function handleChange(e){
            setCounter(e.target.value.length);
    }

    function handleSubmit(e){

    }

    return (<div className="fixed top-0 left-0 w-screen h-screen bg-slate-600/50 backdrop-blur-md flex items-center justify-center">
            <form className="w-[40%] bg-white py-5 px-5 flex flex-col rounded-xl" onSubmit={handleSubmit}>
                <div className="h-full flex justify-between text-blue-500 border-b-2 border-slate-400/40 pb-4">
                    <h2 className="text-xl font-Abgalumo text-blue-600 font-bold">NEW DISCUSSION</h2>
                    <FontAwesomeIcon icon={faClose} size="2xl" onClick={handleClick}/>
                </div>

                <h3 className="text-xl font-Abgalumo text-blue-600 font-bold mt-3">TOPIC</h3>
                <input name="topic" type="text" className="py-2 px-3 border-2 border-slate-400/20 rounded-xl outline-none" placeholder="Write the topic..." maxLength={20} required/>
                
                <h3 className="text-xl font-Abgalumo text-blue-600 font-bold">DESCRIPTION</h3>
                <textarea name="description" id="" rows="10" className={`py-2 px-3 border-2 border-slate-400/20 rounded-xl outline-none ${counter > 1500 ? "text-red-500" : ""}`} placeholder="Write the description..." onChange={handleChange} required></textarea>

                <div className="mt-3 flex justify-between items-center">
                    {counter > 1500 ? (<button className="text-white py-3 px-5 inline bg-slate-600 rounded-lg flex items-center gap-x-2 font-bold" disabled>
                        <h2>CREATE DISCUSSION</h2>
                        <FontAwesomeIcon icon={faPeopleGroup}/>
                    </button>) : (<button className="text-white py-3 px-5 inline bg-blue-600 rounded-lg flex items-center gap-x-2 font-bold">
                        <h2>CREATE DISCUSSION</h2>
                        <FontAwesomeIcon icon={faPeopleGroup}/>
                    </button>)}

                    <h2 className={`mt-5 ${counter > 1500 ? "text-red-500" : ""}`}>{counter}/1500</h2>
                </div>
            </form>
    </div>);
}
 
export default NewDiscussion;