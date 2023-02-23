import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import CinemaDetailPart from './../../../components/Main/CinemasDetail/CinemaDetail';

function CinemaDetail() {

    return (
        <>
            <Helmet>
                <title> Cinema | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <CinemaDetailPart />
        </>
    )
}

export default CinemaDetail