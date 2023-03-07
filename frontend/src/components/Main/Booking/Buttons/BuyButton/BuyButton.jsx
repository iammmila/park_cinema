import React, { useContext } from 'react'
import { MainContext } from './../../../../../context/ContextProvider';

//general scss
import "./BuyButton.scss"
import { Link } from 'react-router-dom';

function BuyButton() {
    const { handleBuy } = useContext(MainContext)

    return (
        <Link to="/payment">
            <button className="button-86" onClick={(e) => {
                handleBuy();
            }}>
                <span >  Buy </span>
            </button>
        </Link>

    )
}

export default BuyButton