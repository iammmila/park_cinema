import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../../context/ContextProvider';
import LoadingSoonCard from '../Soon/LoadingSoonCard/LoadingSoonCard';

//general scss
import "./style.scss"

function Campaigns() {
  const { campaings, setCampaigns, loading, setLoading } = useContext(MainContext)

  const URL = 'http://localhost:8080/campaigns';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    await axios.get(URL).then((res) => setCampaigns(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
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
                    <div className="card-img">
                      <img src={data.image} alt="film" className="img-responsive" />
                    </div>
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