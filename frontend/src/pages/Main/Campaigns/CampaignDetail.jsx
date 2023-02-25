import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async';

//components
import CampaignDetailPart from "../../../components/Main/Campaigns/CampaignDetail/CampaignDetail"
function CampaignDetail() {
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
                <title>Campaign's Detail | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <CampaignDetailPart />
        </>
    )
}

export default CampaignDetail