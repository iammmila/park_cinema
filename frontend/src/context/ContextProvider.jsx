import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MainContext = createContext(null)
function ContextProvider({ children }) {
    const [mode, setMode] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [isActive, setIsActive] = useState({
        id: 'today',
    })

    useEffect(() => {
        console.log(isActive)
    }, [isActive])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const showComponent = (e) => {
        setIsActive({
            id: e.target.id,
        })
    }
    const values = {
        mode, setMode,
        isOpen, setIsOpen,
        showTopBtn, setShowTopBtn,
        goToTop,
        isActive, setIsActive,
        showComponent
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