import React, { useContext } from 'react'

//context
import { MainContext } from '../../../../context/ContextProvider'

//button's scss
import "./ButtonSoon.scss"

function ButtonSoon() {
    const { showComponent } = useContext(MainContext)

    return (
        <button id='soon' onClick={(e) => { showComponent(e) }} className='glowing-btn2'>
            <span id='soon' onClick={(e) => { showComponent(e) }} className='glowing-txt'>S
                <span id='soon' onClick={(e) => { showComponent(e) }} className='faulty-letter'>OO</span>N
            </span>
        </button>
    )
}

export default ButtonSoon