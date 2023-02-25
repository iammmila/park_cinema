import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import PrivacyRules from '../../../components/Main/Privacy/PrivacyRules'

function Privacy() {
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
                <title>Privacy | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <PrivacyRules />
        </>
    )
}

export default Privacy