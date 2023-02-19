import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//general component's scss
import "./style.scss"

//components
import LoadingCard from './../LoadingCard/LoadingCard';

//context
import { MainContext } from '../../../../context/ContextProvider';

function CardsSoon() {
  const { soonFilms, setSoonFilms, loading, setLoading } = useContext(MainContext)

  const URL = 'http://localhost:8080/films';

  const getData = async () => {
    await axios.get(URL).then((res) => setSoonFilms(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='soon_cards_wrapper'>
      <ul className='cards_soon'>
        {/* //!cards of soon limited films */}
        {
          loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
          </>) :
            soonFilms?.map((data) => (
              <li className="card_soon" key={data._id}>
                {/* <img className='soon-poster' src={soon} alt="soon" /> */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Link className="cardLink" to={`/film/${data._id}`}>
                  <div className="card__background" style={{ backgroundImage: `url(${data.poster})` }}></div>
                  <div className="card__content">
                    <p className="card__category">{data.date}</p>
                    <h3 className="card__heading">{data.name}</h3>
                  </div>
                </Link>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default CardsSoon