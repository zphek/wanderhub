import logo from "../assets/logo.png";

const Footer = () => {
    return (<footer className="py-6 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center">
            <img src={logo} alt="" width={60}/>
            <h2 className="text-blue-800 text-2xl font-thin">WANDERHUB</h2>
        </div>

        <h3 className="text-slate-800 font-thin">@Copyright. All rights reserved 2024. </h3>

        <h3 className="mt-5 text-blue-500">Made with ❤️ by Bernardo Báez. </h3>
    </footer>);
}
 
export default Footer;