import { useContext } from "react";
import GeneralContext from "../contexts/GeneralContext";
import { Navigate } from "react-router-dom";

const Auth = ({children}) => {
    let {state, dispatch} = useContext(GeneralContext);
    
    return (<>
        {state.auth ? ({children}) : <>
            <Navigate to="/"/>
        </>}
    </>);
}
 
export default Auth;