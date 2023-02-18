import React from 'react'

//general component's scss
import "./style.scss"

//react icon
import { GrTicket } from "react-icons/gr"
import { Link } from 'react-router-dom';

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