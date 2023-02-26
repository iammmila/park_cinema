import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//general scss
import "./CampaignDetail.scss"
import CampaignInfo from './CampaignInfo/CampaignInfo';

function CampaignDetail() {
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
        <div className='campaign_id_section'>
            <div className="container">
                <div className="campaigns_id_wrapper">
                    <div className='line' ></div>
                    <h1>{campaignDetail.campaignName}</h1>
                    <CampaignInfo />
                </div>
            </div>
        </div>
    )
}

export default CampaignDetail