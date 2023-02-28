import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//components
import BuyTicketButton from './../../Home/BuyTicket/Button/BuyTicketButton';

//general scss
import "./InformationFilm.scss"

function InformationFilm() {
    const { filmDetail, setFilmDetail, FilmsURL } = useContext(MainContext)
    const { id } = useParams()

    const getData = async () => {
        await axios.get(`${FilmsURL}/${id}`).then((res) => setFilmDetail(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='film_section'>
            <div className="container">
                <div className="film_wrapper_section">
                    <div className='line'></div>
                    <h1>{filmDetail.name}</h1>
                    <div className='wrapper_film_content'>
                        <div className='film_detail'>
                            <div className='neon_red'>
                                <img src={filmDetail.poster} alt="film_poster" />
                            </div>
                            <div className='film_formats'>
                                {
                                    // eslint-disable-next-line array-callback-return
                                    filmDetail.genres?.map(n => {
                                        return (
                                            <span className='tag' key={n.genreId}>
                                                {n.name}
                                            </span>)
                                    })
                                }
                                {
                                    // eslint-disable-next-line array-callback-return
                                    filmDetail.formats?.map(n => {
                                        return (
                                            <span className='tag' key={n.id}>
                                                {n.name}
                                            </span>)
                                    })
                                }
                            </div>
                            <BuyTicketButton />
                        </div>
                        <div className='film_information'>
                            <div className="film_description">
                                <p>
                                    {filmDetail.description}
                                </p>
                            </div>
                            <div className='general_information'>
                                <h3><span>Country:</span> {filmDetail.country}</h3>
                                <h3><span>Date:</span> {filmDetail.date}</h3>
                                <h3><span>Director:</span> {filmDetail.director}</h3>
                                <h3><span>Actors:</span> {filmDetail.actors}</h3>
                                <h3><span>Duration:</span> {filmDetail.durationMinute}</h3>
                                <h3><span>Age Limit:</span>{filmDetail.ageLimit}+</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationFilm