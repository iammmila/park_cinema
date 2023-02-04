import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MainContext = createContext(null)
function ContextProvider({ children }) {
    const [mode, setMode] = useState("light");

    const values = {
        mode, setMode
    }
useEffect(()=>{
 document.body.className=mode
}, [mode ])

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider