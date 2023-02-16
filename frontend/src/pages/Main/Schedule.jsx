import React from 'react'
import { Helmet } from 'react-helmet-async';
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