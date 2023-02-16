import React, { useContext } from 'react'
import "./style.scss"
import { IoIosArrowUp } from "react-icons/io"
import { MainContext } from '../../../context/ContextProvider';

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