import image from "../assets/travel.jpg";

const Post = () => {
    return (<div className="flex flex-col mt-5 bg-slate-200 rounded-xl max-w-[25rem]">
        <header className="flex flex-row gap-x-6 px-4 py-3">
            <div className="w-[50px] h-[50px] rounded-full bg-slate-300"></div>
            <div>
                <h1 className="font-Abgalumo">
                    Bernardo Báez
                </h1>
                <h1 className="text-slate-500">
                    Post
                </h1>
            </div>
        </header>

        <img src={image} alt="" className="lg:h-[32rem] lg:w-[32rem] w-[50%]"/>

        <footer className="px-4 py-4">
            <h2 className="font-bold">bernardo_baez</h2>
            <h3>CAPTION: Aqui en punta cana.</h3>
        </footer>
    </div>);
}
 
export default Post;