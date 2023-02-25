import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import BookingPart from '../../components/Main/Booking/BookingPart'

function Booking() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
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