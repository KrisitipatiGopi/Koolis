import { createContext, useState } from "react";

 export const AppContext = createContext()

 const ContextProvider = (props) => {

    const [name,setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const [days, setDays] = useState(0);
    const [koolis, setKoolis] = useState([])

    const value = {
        name,setName,amount,setAmount,
        type,setType,days,setDays,koolis,setKoolis
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

 }
 export default ContextProvider;