import logo from "../assets/logo.png";

const Page404 = () => {
    return (<div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">

        <header className="flex flex-row items0ce">
            <img src={logo} alt="" width={80}/>
            <h2 className="text-blue-500 font-thin text-6xl">WANDERHUB</h2>
        </header>

        <div>
            <h1 className="font-bold text-9xl font-bold text-center">ERROR 404</h1>
            <h3 className="text-7xl text-center">This page not exist.</h3>
        </div>
    </div>);
}
 
export default Page404;