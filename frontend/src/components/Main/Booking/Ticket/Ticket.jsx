import React from 'react'

//general scss
import "./Ticket.scss"

function Ticket() {
    return (
        <div className="cardWrap">
            <div className="card cardLeft">
                <h1>Park Cinema</h1>
                <div className="title">
                    <h2>How I met your Mother</h2>
                    <span>movie</span>
                </div>
                <div className="name">
                    <h2>Vladimir Kudinov</h2>
                    <span>name</span>
                </div>
                <div className="seat-info">
                    <h2>156</h2>
                    <span>seat</span>
                </div>
                <div className="time">
                    <h2>12:00</h2>
                    <span>time</span>
                </div>
            </div>
            <div className="card cardRight">
                <div className="eye"></div>
                <div className="number">
                    <h3>156</h3>
                    <span>seat</span>
                </div>
                <div className="barcode"></div>
            </div>
        </div>
    )
}

export default Ticket