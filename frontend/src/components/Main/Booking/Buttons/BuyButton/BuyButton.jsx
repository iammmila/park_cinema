import React from 'react'

//general scss
import "./BuyButton.scss"

function BuyButton() {
    function handleClick(e) {
        e.preventDefault();
        window.history.back();
    }
    
    return (
        <button className='buy_button' onClick={handleClick}>
            <span >  Buy </span>
        </button>
    )
}

export default BuyButton