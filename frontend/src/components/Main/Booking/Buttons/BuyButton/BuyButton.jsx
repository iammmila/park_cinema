import React, { useContext } from 'react'
import { MainContext } from './../../../../../context/ContextProvider';

//general scss
import "./BuyButton.scss"

function BuyButton() {
    const { handleBuy } = useContext(MainContext)

    // function handleClick(e) {
    //     e.preventDefault();
    //     window.history.back();
    // }

    return (
        <button className="button-86" onClick={(e) => {
            // handleClick(e);
            handleBuy();
        }}>
            <span >  Buy </span>
        </button>
    )
}

export default BuyButton