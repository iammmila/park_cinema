import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async';

//compnonents
import HeroSection from '../../components/Main/Schedule/HeroSection/HeroSection';

function Schedule() {
    return (
        <>
            <Helmet>
                <title>Schedule | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
        </>
    )
}

export default Schedule