import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//context
import { MainContext } from '../../../../context/ContextProvider';

//button for buy
import ButtonBuy from './../ButtonBuy/ButtonBuy';

//general component's scss
import "./CardsToday.scss"

//components
import LoadingCard from '../LoadingCard/LoadingCard';

function CardsToday() {
  const { films, setFilms, setLoading, filterTags, loading, setFilmName } = useContext(MainContext)
  const FilmsToday = 'http://localhost:5196/api/Films?isNew=false'
  const getData = async () => {
    await axios.get(FilmsToday).then((res) => setFilms(res.data));
    setLoading(false);
  }
  function handleCardClick(filmName) {
    setFilmName(filmName);
    console.log(filmName)
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='today_cards_wrapper'>
      <ul className='cards_today'>
        {/* //!cards of today Films */}
        {
          loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
          </>) :
            films?.filter((film) => filterTags.length > 0 ? filterTags.every((filterTag) => film.formats.map((format) => format.name).includes(filterTag) || film.languages.map((language) => language.name).includes(filterTag)
            ) : films)
              .map((data) => (
                <li className="card_today" key={data.id}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link className="cardLink" to={`/film/${data.id}`}>
                    <div className="card__background" style={{ backgroundImage: `url(${data.uri})` }}></div>
                    <div className="card__content">
                      <h3 className="card__heading">{data.name}</h3>
                    </div>
                  </Link>
                  <ButtonBuy onClick={() => handleCardClick(data.name)} />
                </li>
              ))
        }
      </ul>
    </div>
  )
}

export default CardsToday