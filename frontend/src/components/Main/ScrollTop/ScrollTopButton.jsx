import React, { useContext } from 'react'
import { MainContext } from '../../../context/ContextProvider';

//general scss
import "./ScrollTopButton.scss"

//icons
import { IoIosArrowUp } from "react-icons/io"

function ScrollTopButton() {
    const { showTopBtn, goToTop } = useContext(MainContext)

    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <IoIosArrowUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    )
}

export default ScrollTopButton