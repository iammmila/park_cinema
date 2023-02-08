import React from 'react'
import "./style.scss"
function BuyTicketButton() {
    return (
        <button className='buy-tckt'>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span>buy now!</span>
        </button>
    )
}

export default BuyTicketButton