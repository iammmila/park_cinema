import React, { useEffect, useState } from 'react'
import "./style.scss"
import { IoIosArrowUp } from "react-icons/io"

function ScrollTopButton() {
    const [showTopBtn, setShowTopBtn] = useState(false);

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