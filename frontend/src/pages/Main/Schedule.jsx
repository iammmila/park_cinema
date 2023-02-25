import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async';

//compnonents
import HeroSection from '../../components/Main/Schedule/HeroSection/HeroSection';

function Schedule() {
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
                <title>Schedule | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
        </>
    )
}

export default Schedule