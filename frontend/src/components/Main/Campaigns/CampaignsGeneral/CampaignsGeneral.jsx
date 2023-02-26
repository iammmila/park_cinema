import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';
import { Link } from 'react-router-dom';

//general scss
import "./CampaignsGeneral.scss"

//components
import LoadingCard from './../../Cinemas/LoadingCard/LoadingCard';

function CampaignsGeneral() {
    const { campaings, setCampaigns, loading, setLoading, CampaignsURL } = useContext(MainContext)

    const getData = async () => {
        await axios.get(CampaignsURL).then((res) => setCampaigns(res.data));
        setLoading(false);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className='campaigns_information'>
            <div className="container">
                <div className="wrapper_campaigns">
                    <div className='line' ></div>
                    <h1>Campaigns</h1>
                    <ul className='cards_campaigns'>
                        {/* //!cards of cinemas */}
                        {
                            loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
                            </>) :
                                campaings?.map((data) => (
                                    <li className="card_campaign" key={data._id}>
                                        <Link to={`/campaigns/${data._id}`}>
                                            <div className="card-img">
                                                <img src={data.campaignImage} alt="campaign" className="img-responsive" />
                                            </div>
                                            <div className="card-text">
                                                <div className="card-footer">
                                                    <div className="card-right"> {data.campaignDescription.slice(0, 200)}{`...`}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CampaignsGeneral