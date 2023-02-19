import React from 'react'

//general scss
import "./style.scss"
import { Link } from 'react-router-dom';

function ButtonBuy() {
    return (
        <Link to="/booking">
            <div className="btn_buy">
                <button>buy</button>
            </div>
        </Link >
    )
}

export default ButtonBuy