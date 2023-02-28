import React from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./BuyTicketButton.scss"

function BuyTicketButton() {
    return (
        <>
            <Link to="/booking">
                <button className='buy-tckt'>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span>buy now!
                    </span>
                </button>
            </Link>
        </>
    )
}

export default BuyTicketButton