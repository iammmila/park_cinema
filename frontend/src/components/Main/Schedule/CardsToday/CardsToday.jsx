import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//context
import { MainContext } from '../../../../context/ContextProvider';

//button for buy
import ButtonBuy from './../ButtonBuy/ButtonBuy';

//general component's scss
import "./style.scss"
import LoadingCard from '../LoadingCard/LoadingCard';

function CardsToday() {
  const { films, setFilms, setLoading, filterTags, loading, FilmsURL } = useContext(MainContext)


  const getData = async () => {
    await axios.get(FilmsURL).then((res) => setFilms(res.data));
    setLoading(false);

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
            // eslint-disable-next-line array-callback-return
            films?.filter((film) => filterTags.length > 0 ? filterTags.every((filterTag) => film.formats.map((format) => format.name).includes(filterTag) || film.languages.map((language) => language.name).includes(filterTag)
            ) : films)
              .map((data) => (
                <li className="card_today" key={data._id}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link className="cardLink" to={`/film/${data._id}`}>
                    <div className="card__background" style={{ backgroundImage: `url(${data.poster})` }}></div>
                    <div className="card__content">
                      <h3 className="card__heading">{data.name}</h3>
                    </div>
                  </Link>
                  <ButtonBuy />
                </li>
              ))
        }

        {/* <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film1})` }} ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }} ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }} ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }}  ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }}></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }} ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film2})` }}  ></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link>
          <ButtonBuy />
        </li>
        <li className="card_today">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link className="cardLink" to="/schedule">
            <div className="card__background" style={{ backgroundImage: `url(${film3})` }}></div>
            <div className="card__content">
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </Link> */}
        {/* <ButtonBuy /> */}
        {/* </li> */}
      </ul>
    </div>
  )
}

export default CardsToday