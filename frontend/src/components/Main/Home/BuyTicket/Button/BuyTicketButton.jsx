import React, { useContext } from 'react'
import "./style.scss"
import Modal from './../Modal/Modal';
import { MainContext } from '../../../../../context/ContextProvider';
function BuyTicketButton() {
    const { isOpen, setIsOpen } = useContext(MainContext)
    return (
        <>
            <button className='buy-tckt' onClick={() => setIsOpen(true)}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span>buy now!</span>
            </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    )
}

export default BuyTicketButton