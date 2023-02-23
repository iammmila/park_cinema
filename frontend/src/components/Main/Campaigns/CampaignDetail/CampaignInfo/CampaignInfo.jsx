import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//general scss
import "./CampaignInfo.scss"

function CampaignInfo() {
    const { campaignDetail, setCampaignDetail, CampaignsURL } = useContext(MainContext)
    const { _id } = useParams()

    const getData = async () => {
        await axios.get(`${CampaignsURL}/${_id}`).then((res) => setCampaignDetail(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='info_wrapper'>
            <div>
                <img src={campaignDetail.campaignImage} alt="campaign_image" />
            </div>
            <div className='neon_red'>
                <p>{campaignDetail.campaignDescription}</p>
            </div>
        </div>
    )
}

export default CampaignInfo