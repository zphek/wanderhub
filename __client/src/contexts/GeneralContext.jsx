import { createContext, useReducer } from "react";

const GeneralContext = createContext();

function reducerFunction(state, action){

}

function GeneralProvider({children}){
    let [state, dispatch] = useReducer(reducerFunction, {auth: false, userData: null});

    return(
        <GeneralContext.Provider value={{state, dispatch}}>
            {children}
        </GeneralContext.Provider>
    );
}

export {GeneralProvider};
export default GeneralContext;