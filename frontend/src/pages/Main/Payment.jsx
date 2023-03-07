import React from 'react'
import { Helmet } from 'react-helmet-async';

//components
import General from '../../components/Main/Payment/General';

function Payment() {
    return (
        <>
            <Helmet>
                <title>Payment | Park Cinema</title>
                <meta name='description' content='It is about Payment of Park Cinema' />
            </Helmet>
            <General />
        </>
    )
}

export default Payment