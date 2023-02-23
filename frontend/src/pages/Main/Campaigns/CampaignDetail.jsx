import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async';

function CampaignDetail() {
    return (
        <>
            <Helmet>
                <title>Campaign's Detail | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            CampaignDetail</>
    )
}

export default CampaignDetail