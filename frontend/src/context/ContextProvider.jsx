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
    const [formats, setFormats] = useState([])
    const [filmDetail, setFilmDetail] = useState([])
    const [cinemas, setCinemas] = useState([])
    const [campaings, setCampaigns] = useState([])
    const [campaignDetail, setCampaignDetail] = useState([])
    const [soonFilms, setSoonFilms] = useState([])
    const [cinemaDetail, setCinemaDetail] = useState({})
    const [loading, setLoading] = useState(true);
    const [filterName, setFilterName] = useState("");
    const [filterTags, setFilterTags] = useState([])
    const [toggleState, setToggleState] = useState();
    const [selectedFilmName, setSelectedFilmName] = useState("");
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [purchasedSeats, setPurchasedSeats] = useState([]);
    const [filmName, setFilmName] = useState("");

    //!admin's part
    const [filtered, setFiltered] = useState("");
    // const [editData, setEditData] = useState({});
    const [editData, setEditData] = useState({
        name: '',
        ageLimit: 0,
        country: '',
        director: '',
        actors: '',
        description: '',
        trailer: '',
        date: new Date(),
        image: null,
        durationMinute: 0,
        isNew: false,
        genres_Id: 0,
        languages_Id: 0,
        subtitles_Id: 0,
        formats_Id: 0,
    });

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [languages, setLanguages] = useState([])


    //!URLs
    const FilmsURL = 'http://localhost:5196/api/Films';
    const CinemasURL = 'http://localhost:8080/cinemas';
    const CampaignsURL = 'http://localhost:8080/campaigns'
    const FormatsURL = 'http://localhost:8080/formats';
    const LanguagesURL = 'http://localhost:8080/languages';

    function handleBuy() {
        const updatedSeats = [...seats];
        const updatedSelectedSeats = [...selectedSeats];
        updatedSelectedSeats.forEach((seat) => {
            updatedSeats[seat.row][seat.column].selected = false;
        });
        setPurchasedSeats([...purchasedSeats, ...updatedSelectedSeats]);
        setSelectedSeats([]);
        setSeats(updatedSeats);
    }

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
        // console.log(isActive)
    }, [isActive])

    function handleAdd() {
        setShowModal(true);
    }
    function handleAdd2() {
        setShowModal2(true);
    }
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

    //!admin part filter
    function handleFilter(e) {
        setFiltered(e.target.value);
    }
    //?VALUES
    const values = {
        mode, setMode,
        isOpen, setIsOpen,
        showTopBtn, setShowTopBtn,
        goToTop,
        isActive, setIsActive,
        showComponent,
        films, setFilms,
        filmDetail, setFilmDetail,
        cinemas, setCinemas,
        campaings, setCampaigns,
        soonFilms, setSoonFilms,
        cinemaDetail, setCinemaDetail,
        loading, setLoading, filterHandler,
        filterTags, setFilterTags,
        filterName, setFilterName,
        FilmsURL, CampaignsURL, CinemasURL, FormatsURL,
        changeTheme,
        campaignDetail, setCampaignDetail,
        toggleState, setToggleState,
        toggleTab,
        filtered, setFiltered, handleFilter,
        editData, setEditData,
        showModal, setShowModal,
        isModalOpen, setIsModalOpen
        , handleAdd,
        selectedFilmName, setSelectedFilmName,
        seats, setSeats,
        selectedSeats, setSelectedSeats,
        handleBuy,handleAdd2,
        purchasedSeats, setPurchasedSeats,
        filmName, setFilmName,
        formats, setFormats,
        LanguagesURL, languages, setLanguages,
        showModal2, setShowModal2,
        showModal3, setShowModal3
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