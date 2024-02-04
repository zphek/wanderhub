import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams();
    return (<section className="min-h-screen">
        <section className="h-[100%] w-screen flex flex-col justify-center items-center">
            <div className="w-full bg-indigo-500 flex justify-center py-4">
                <div className="w-[60%] flex items-center gap-x-4">
                        <div className="min-h-36 min-w-36 rounded-full bg-slate-600"></div>
                        <div>
                            <h2 className="text-5xl font-Abgalumo text-white font-bold">Bernardo Baez</h2>
                            <p className="text-white text-lg mt-2">
                             ¡Hola, aventureros! Soy Bernardo, un apasionado de la exploración y la curiosidad sin límites. 🗺️✨ Desde mi rincón del mundo, comparto historias fascinantes sobre mis viajes, descubrimientos y experiencias únicas.
                            </p>
                        </div>
                </div>
            </div>

            <section className="h-[100%] w-[60%] mt-5">
                <h2 className="font-bold text-4xl">Recent posts</h2>
            </section>

        </section>
    </section>);
}
 
export default User;