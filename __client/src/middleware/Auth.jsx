import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({children}) => {
    const token = localStorage.getItem("token");
    
    return (
        <>
          {!token ? children : <Navigate to="/" replace />}
        </>
      );      
}
 
export default Auth;