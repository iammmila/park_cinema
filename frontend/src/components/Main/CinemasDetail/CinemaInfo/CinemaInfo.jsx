import React, { useContext, useEffect } from 'react'

//general scss
import "./CinemaInfo.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MainContext } from './../../../../context/ContextProvider';

function CinemaInfo() {
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
        <div className='info_wrapper'>
            <div>
                <img src={cinemaDetail.images} alt="cinema_image" />
            </div>
            <div className='neon_red'>
                <p><span>Address:</span>{cinemaDetail.addressLine}</p>
                <p><span>Phone:</span>{cinemaDetail.phoneNumber}</p>
                <p><span>Work hours:</span>{cinemaDetail.workHour}</p>
                {/* <p><span>Address:</span>{cinemaDetail.addressLine}</p> */}
            </div>
        </div>
    )
}

export default CinemaInfo