import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MainContext } from '../../../context/ContextProvider';

//general scss
import "./CinemaDetail.scss"
import CinemaInfo from './CinemaInfo/CinemaInfo';

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
        <div className='cinema_id_section'>
            <div className="container">
                <div className="cinema_id_wrapper">
                    <div style={{ width: "18%" }} className='line' ></div>
                    <h1>{cinemaDetail.cinemaName}</h1>
                    <CinemaInfo />
                </div>
            </div>
        </div>
        // <ul>
        //     <li className="card_cinema">
        //         <div className="card-img">
        //             <img src={cinemaDetail.images} alt="cinema" className="img-responsive" />
        //         </div>
        //         <div className="card-text">
        //             <div className="title-cinema">
        //                 <h3>{cinemaDetail.name}</h3>
        //             </div>
        //         </div>
        //     </li>
        // </ul>
    )
}

export default CinemaDetail