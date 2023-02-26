import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import { MainContext } from '../../../../context/ContextProvider';

//components
import LoadingCard from '../LoadingCard/LoadingCard';

//general scss
import "./CinemasInfo.scss"

function CinemasInfo() {
  const { cinemas, setCinemas, loading, setLoading, CinemasURL } = useContext(MainContext)

  const getData = async () => {
    await axios.get(CinemasURL).then((res) => setCinemas(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='cinemas_information'>
      <div className="container">
        <div className="wrapper_cinemas">
          <div className='line' ></div>
          <h1>Cinemas</h1>
          <ul className='cards_cinemas'>

            {/* //!cards of cinemas */}
            {
              loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
              </>) :
                cinemas?.map((data) => (
                  <li className="card_cinema" key={data._id}>
                    <Link to={`/cinemas/${data._id}`}>
                      <div className="card-img">
                        <img src={data.images} alt="cinema" className="img-responsive" />
                      </div>
                      <div className="card-text">
                        <div className="title-cinema">
                          <h3>{data.cinemaName}</h3>
                        </div>
                        <div className="card-footer">
                          <div className="card-left"><span className="address">Address:</span></div>
                          <div className="card-right">{data.addressLine}</div>
                          <br />
                          <div className="card-left"><span className="phone">Phone:</span></div>
                          <div className="card-right"> {data.phoneNumber}</div>
                          <br />
                          <div className="card-left"><span className="hours">Work hours:</span></div>
                          <div className="card-right">{data.workHour}</div>
                          <br />
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

export default CinemasInfo