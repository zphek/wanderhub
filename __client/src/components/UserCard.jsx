import { Link } from "react-router-dom";

const UserCard = ({data}) => {
    const {USERNAME, FULL_NAME} = data;

    return (
        <Link to={`/user/${USERNAME}`} className={`bg-white shadow-lg rounded-sm p-5 flex items-start gap-x-5 max-w-[25rem] rounded-3xl hover:shadow-2xl transition-[400ms] cursor-pointer`}>
            <span className="w-20 h-20 bg-slate-400 rounded-full flex-shrink-0"></span>
            
            <div>
                <h2 className="text-blue-500 font-bold">{FULL_NAME}</h2>
                <h3>@{USERNAME}</h3>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse est potenti libero, viverra et ornare pulvinar.</p>
            </div>
        </Link>
    );
}

export default UserCard;
