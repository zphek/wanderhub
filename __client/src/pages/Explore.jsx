import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import sendReq from "../helpers/sendReq";

const Explore = () => {
    const [] = useState();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        sendReq("http://localhost:3000/v1/user/getUsers")
        .then(response=>{
            if(response){
                const {data} = response;
                setUsers(data);
            }
        })
    }, [])

    return (<div className="min-h-screen w-screen bg-blue-500 flex flex-col items-center">
        <section className="flex justify-center bg-white py-5 w-screen">
            <div className="mt-5 w-[60%]">
              <h2 className="text-3xl font-extrabold font-Abgalumo">CONNECT WITH OTHERS</h2>
            </div>
        </section>

        <section className="w-[60%] flex flex-wrap mt-5 gap-x-4 gap-y-4 justify-center">
            {users.map(ele=> <UserCard data={ele}/>)}
        </section>
    </div>);
}
 
export default Explore;