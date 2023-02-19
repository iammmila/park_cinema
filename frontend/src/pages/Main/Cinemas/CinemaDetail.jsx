import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { MainContext } from '../../../context/ContextProvider';

function CinemaDetail() {
    const { cinemaDetail, setCinemaDetail } = useContext(MainContext)
    const { _id } = useParams()

    const URL = 'http://localhost:8080/cinemas';

    const getData = async () => {
        await axios.get(`${URL}/${_id}`).then((res) => setCinemaDetail(res.data));
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Helmet>
                <title> Cinema | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <ul>
                <li className="card_cinema">
                    <div className="card-img">
                        <img src={cinemaDetail.images} alt="cinema" className="img-responsive" />
                    </div>
                    <div className="card-text">
                        <div className="title-cinema">
                            <h3>{cinemaDetail.name}</h3>
                        </div>
                        {/* <div className="card-footer">
                            <div className="card-left"><span className="address">Address:</span></div>
                            <div className="card-right">{cinemaDetail}</div>
                            <br />
                            <div className="card-left"><span className="phone">Phone:</span></div>
                            <div className="card-right"> {cinemaDetail}</div>
                            <br />
                            <div className="card-left"><span className="hours">Work hours:</span></div>
                            <div className="card-right">{cinemaDetail}</div>
                            <br />
                        </div> */}
                    </div>
                </li>
            </ul>
        </>
    )
}

export default CinemaDetail