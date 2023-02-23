import React from 'react'

//components
import GoBackButton from './GoBack/GoBackButton';
import BuyButton from './BuyButton/BuyButton';

//general scss
import "./Buttons.scss"

function Buttons() {
    return (
        <div className='buttons_wrapper'>
            <GoBackButton />
            <BuyButton />
        </div>
    )
}

export default Buttons