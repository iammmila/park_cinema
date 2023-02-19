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
    const [cinemas, setCinemas] = useState([])
    const [soonFilms, setSoonFilms] = useState([])
    const [cinemaDetail, setCinemaDetail] = useState({})
    const [loading, setLoading] = useState(true);

    //!schedule part
    const showComponent = (e) => {
        setIsActive({
            id: e.target.id,
        })
    }
    useEffect(() => {
        console.log(isActive)
    }, [isActive])

    //!scrolltop
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

    //?VALUES
    const values = {
        mode, setMode,
        isOpen, setIsOpen,
        showTopBtn, setShowTopBtn,
        goToTop,
        isActive, setIsActive,
        showComponent,
        cinemas, setCinemas,
        soonFilms, setSoonFilms,
        cinemaDetail, setCinemaDetail,
        loading, setLoading
    }
    //! DARK AND LIGHT MODE
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