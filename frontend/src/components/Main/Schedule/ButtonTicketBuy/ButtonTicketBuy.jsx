import React from 'react'
import { Link } from 'react-router-dom';

//general component's scss
import "./ButtonTicketBuy.scss"

//icons
import { GrTicket } from "react-icons/gr"

function ButtonTicketBuy() {
    return (
        <div className="btn_ticket">
            <Link to="/booking">
                <button>
                    <GrTicket className='ticket-icon' />
                </button>
            </Link>
        </div>
    )
}

export default ButtonTicketBuy