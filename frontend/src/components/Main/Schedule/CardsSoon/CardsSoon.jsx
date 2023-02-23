import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//general component's scss
import "./CardsSoon.scss"

//components
import LoadingCard from './../LoadingCard/LoadingCard';

//context
import { MainContext } from '../../../../context/ContextProvider';

function CardsSoon() {
  const { soonFilms, setSoonFilms, setLoading, filterTags, loading, FilmsURL } = useContext(MainContext)

  const getData = async () => {
    await axios.get(FilmsURL).then((res) => setSoonFilms(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='soon_cards_wrapper'>
      <ul className='cards_soon'>
        {/* //!cards of soon limited films */}
        {
          loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
          </>) :
            soonFilms?.filter((film) => filterTags.length > 0 ? filterTags.every((filterTag) =>
              film.formats.map((format) => format.name).includes(filterTag) || film.languages.map((language) => language.name).includes(filterTag)
            ) : soonFilms)
              .map((data) => (
                <li className="card_soon" key={data._id}>
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
              ))}
      </ul>
    </div>
  )
}

export default CardsSoon