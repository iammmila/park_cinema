import React from 'react'
import { Helmet } from 'react-helmet-async';

//components
import Films from './../../components/Admin/Films/Films';

function GeneralFilms() {
    return (
        <>
            <Helmet>
                <title>General Films | Park Cinema</title>
                <meta name='description' content='It is about General Films of Park Cinema' />
            </Helmet>
            <Films />
        </>
    )
}

export default GeneralFilms