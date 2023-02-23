import React from 'react'

//geeneral scss
import "./InformationSeat.scss"

function InformationSeat() {
    return (
        <ul className="info_sections">
            <li>
                <span className="seat available" />N / A
            </li>
            <li>
                <span className="seat selected" /> Selected
            </li>
            <li>
                <span className="seat occupied" /> Occupied
            </li>
        </ul>
    )
}

export default InformationSeat