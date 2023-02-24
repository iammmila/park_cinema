import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const MainContext = createContext(null)
function ContextProvider({ children }) {
    //! USESTATES
    const [mode, setMode] = useState("dark");
    const [isOpen, setIsOpen] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [isActive, setIsActive] = useState({
        id: 'today',
    })
    const [films, setFilms] = useState([])
    const [cinemas, setCinemas] = useState([])
    const [campaings, setCampaigns] = useState([])
    const [campaignDetail, setCampaignDetail] = useState([])
    const [soonFilms, setSoonFilms] = useState([])
    const [cinemaDetail, setCinemaDetail] = useState({})
    const [loading, setLoading] = useState(true);
    const [filterName, setFilterName] = useState("");
    const [filterTags, setFilterTags] = useState([])
    const [toggleState, setToggleState] = useState();


    //!URLs
    const FilmsURL = 'http://localhost:8080/films';
    const CinemasURL = 'http://localhost:8080/cinemas';
    const CampaignsURL = 'http://localhost:8080/campaigns'

    //!accordion in "about page"
    const toggleTab = (index) => {
        setToggleState(index);
    };

    //!schedule part
    const showComponent = (e) => {
        setIsActive({
            id: e.target.id,
        })
    }
    useEffect(() => {
        console.log(isActive)
    }, [isActive])


    // ! theme==dark/light
    const changeTheme = () => {
        setMode(mode === "dark" ? "light" : "dark")
    }
    //! filter checkbox
    const filterHandler = (e) => {
        if (e.target.checked) {
            setFilterTags([...filterTags, e.target.value])
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== e.target.value)
            )
        }
    }

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
        films, setFilms,
        cinemas, setCinemas,
        campaings, setCampaigns,
        soonFilms, setSoonFilms,
        cinemaDetail, setCinemaDetail,
        loading, setLoading, filterHandler,
        filterTags, setFilterTags,
        filterName, setFilterName,
        FilmsURL, CampaignsURL, CinemasURL,
        changeTheme,
        campaignDetail, setCampaignDetail,
        toggleState, setToggleState,
        toggleTab
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