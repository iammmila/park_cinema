import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//general scss
import "./FilmVideo.scss"
import 'video-react/dist/video-react.css';

function HeroSection() {
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
        <div className='hero_video' key={filmDetail.id}>
            <iframe
                height="auto"
                src={`https://www.youtube.com/embed/${filmDetail.trailer}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default HeroSection