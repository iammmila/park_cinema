import React, { useContext, useEffect } from 'react'
import axios from 'axios';

//general scss
import "./Soon.scss"

//soon poster
import soon from "../../../../assets/images/soon2.png"

//context
import { MainContext } from './../../../../context/ContextProvider';

//components
import LoadingCard from './../../Cinemas/LoadingCard/LoadingCard';
import { Link } from 'react-router-dom';

function Soon() {
  const { soonFilms, setSoonFilms, loading, setLoading, FilmsURL } = useContext(MainContext)

  const getData = async () => {
    await axios.get(FilmsURL).then((res) => setSoonFilms(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='soon-films'>
      <div className="container">
        <div className="wrapper-films">
          <div style={{ width: "20%" }} className='line'></div>
          <h1>Soon Movies</h1>
          <ul className='cards'>
            {/* //!cards of soon limited films */}
            {
              loading ? (<><LoadingCard /> <LoadingCard /> <LoadingCard />
              </>) :
                soonFilms?.slice(0, 3).map((data) => {
                  
                  const date = new Date(data.date);
                  const year = date.getFullYear();
                  const options = { year: 'numeric', month: 'long', day: 'numeric' };
                  const formattedDate = date.toLocaleDateString('en-US', options);

                  return (
                    <li className="card" key={data.id}>
                      <Link to={`/film/${data.id}`}>
                        <img className='soon-poster' src={soon} alt="soon" />
                        <div className="card-img">
                          <img src={data.uri} alt="film" className="img-responsive" />
                        </div>
                        <div className="card-text">
                          <div className="category">
                          </div>
                          <div className="title-film">
                            <h3>{data.name}</h3>
                            <span>{year} {formattedDate}</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })
            }
          </ul>
        </div>
      </div >
    </section >
  )
}

export default Soon