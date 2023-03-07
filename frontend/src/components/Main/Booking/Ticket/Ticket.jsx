import React, { useContext } from 'react'
import { MainContext } from './../../../../context/ContextProvider';

//general scss
import "./Ticket.scss"

function Ticket() {
    const { selectedFilmName } = useContext(MainContext)
    return (
        <div className="cardWrap">
            <div className="card cardLeft">
                <h1>Park Cinema</h1>
                <div className="title">
                    <h2>{selectedFilmName}</h2>
                    <span>movie</span>
                </div>
                <div className="price">
                    <h2>3$</h2>
                    <span>price</span>
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