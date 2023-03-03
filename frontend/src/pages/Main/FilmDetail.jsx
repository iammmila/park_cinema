import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'
import FilmVideo from '../../components/Main/FilmDetail/FilmVideo/FilmVideo';
import InformationFilm from '../../components/Main/FilmDetail/InformationFilm/InformationFilm';

function FilmDetail() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <div>
            <Helmet>
                <title>Film detail | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <InformationFilm />
            <FilmVideo />
        </div>
    )
}

export default FilmDetail