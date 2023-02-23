import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import CinemasGeneral from '../../../components/Main/CinemasGeneral/CinemasGeneral';

function CinemaDetail() {

    return (
        <>
            <Helmet>
                <title> Cinema | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <CinemasGeneral />
        </>
    )
}

export default CinemaDetail