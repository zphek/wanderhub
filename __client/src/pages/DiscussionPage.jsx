import { faArrowLeft, faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const DiscussionPage = () => {
    const {id} = useParams();

    return (<section className="min-h-screen w-screen flex justify-center">
        <section className="h-full w-[50%]">
            <Link to="/forum" className="flex items-center gap-x-2 text-blue-600 mt-10">
                <FontAwesomeIcon icon={faArrowLeft} size="xl"/>
                <h3 className="text-xl font-bold">Volver</h3>
            </Link>

            <h2 className="text-4xl mt-5 font-extrabold text-blue-600">
                Wanderhub Discussion
            </h2>

            <p className="mt-5 text-lg text-gray-400">
                ¡Bienvenidos a Wanderhub Discussion! 🗣️ ¿Alguna vez te has preguntado sobre los lugares más misteriosos del mundo? 💼🏰 Únete a esta fascinante conversación donde los exploradores de Wanderhub comparten sus dudas e intrigas sobre destinos enigmáticos, desde antiguas ruinas hasta lugares paranormales.

                🤷‍♂️ ¿Qué secretos ocultos podrían esconderse en las sombras de Machu Picchu o en las profundidades del Triángulo de las Bermudas? 🗿🔍 Comparte tus teorías, anécdotas o simplemente únete a la búsqueda de respuestas en esta comunidad apasionada por la exploración y el descubrimiento.

                ¡Vamos a desentrañar juntos los enigmas que el mundo tiene para ofrecer! 🌐✨ Participa, comenta y deja volar tu imaginación en Wanderhub Discussion. 🚀🔮 #MisteriosDelMundo #Exploradores #WanderhubDiscussion"
            </p>

            <div className="flex flex-col mt-5 gap-x-4 items-center border-t-2 border-slate-600/20 py-2">
                <textarea name="" id="" cols="30" rows="5" placeholder="Write your thougths..." className="w-full rounded-lg px-4 py-2 border-2 border-slate-400/20"></textarea>
                <div className="flex justify-start h-full">
                    <button className="flex gap-x-2 items-center">
                        <h3 className="text-xl text-slate-500">Send</h3>
                        <FontAwesomeIcon icon={faPaperPlane} size="xl" className="text-blue-500"/>
                    </button>
                </div>
            </div>
        </section>
    </section>);
}
 
export default DiscussionPage;