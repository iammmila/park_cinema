import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MainContext } from '../../../context/ContextProvider';

//general scss
import "./CinemaDetail.scss"

function CinemaDetail() {
    const { cinemaDetail, setCinemaDetail, CinemasURL } = useContext(MainContext)
    const { _id } = useParams()

    const getData = async () => {
        await axios.get(`${CinemasURL}/${_id}`).then((res) => setCinemaDetail(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
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
    )
}

export default CinemaDetail