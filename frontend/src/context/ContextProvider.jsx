import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MainContext = createContext(null)
function ContextProvider({ children }) {
    const [mode, setMode] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    const values = {
        mode, setMode,
        isOpen, setIsOpen
    }
    useEffect(() => {
        document.body.className = mode
    }, [mode])

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider