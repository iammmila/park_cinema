import React from 'react'
import { Helmet } from 'react-helmet-async'
import BookingPart from '../../components/Main/Booking/BookingPart'

function Booking() {
    return (
        <>
            <Helmet>
                <title>Booking | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <BookingPart />
        </>
    )
}

export default Booking