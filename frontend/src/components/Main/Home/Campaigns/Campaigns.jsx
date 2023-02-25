import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { MainContext } from '../../../../context/ContextProvider';
import { Link } from 'react-router-dom';

//components
import LoadingSoonCard from '../Soon/LoadingSoonCard/LoadingSoonCard';

//general scss
import "./Campaigns.scss"

function Campaigns() {
  const { campaings, setCampaigns, loading, setLoading, CampaignsURL } = useContext(MainContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    await axios.get(CampaignsURL).then((res) => setCampaigns(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='home-campaigns'>
      <div className="container">
        <div className="campaigns-section">
          <div style={{ width: "18%" }} className='line' ></div>
          <h1>Recent Campaigns</h1>
          <ul className='cards'>
            {/* //!cards of campaigns */}
            {
              loading ? (<><LoadingSoonCard /> <LoadingSoonCard /> <LoadingSoonCard />
              </>) :
                campaings?.slice(0, 3).map((data) => (
                  <li className="card" key={data._id}>
                    <Link to={`/campaigns/${data._id}`}>
                      <div className="card-img">
                        <img src={data.campaignImage} alt="film" className="img-responsive" />
                      </div>
                    </Link>
                  </li>
                ))
            }
          </ul>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Campaigns