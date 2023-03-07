import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './../../../../../context/ContextProvider';
import axios from 'axios';

//general scss
import "./Selection.scss"

function Selection() {
    const { films, setFilms, FilmsURL, setSelectedFilmName, filmName} = useContext(MainContext)
    // eslint-disable-next-line no-unused-vars
    const [movie, setMovie] = useState(null);


    const getData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }
    const handleFilmChange = (e) => {
        const selectedFilm = films.find((film) => film.name === e.target.value);
        setSelectedFilmName(selectedFilm.name);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="Movies">
                <label htmlFor="movie">Pick a movie</label>
                <select id="movie" value={movie ? movie.name : filmName} onChange={handleFilmChange}>
                    <option value={filmName}>{filmName}</option>
                    {films.map((film) => (
                        <option key={film.name} value={film.name}>
                            {film.name} 
                        </option>
                    ))}
                </select>
                {movie && (
                    <div>
                        <h2>{movie.name}</h2>
                    </div>
                )}
            </div>
        </>
    )
}

export default Selection