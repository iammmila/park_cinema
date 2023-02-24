import React from 'react'

//general scss
import "./SelectionCinemas.scss"

function SelectionCinemas() {

    return (
        <>
            {/* <div className="Movies">
                <label htmlFor="movie">Pick a movie</label>
                <select
                    id="movie"
                    value={movie.name}
                    onChange={e => {
                        onChange(movies.find(movie => movie.name === e.target.value))
                    }}
                >
                    {movies.map(movie => (
                        <option key={movie.name} value={movie.name}>
                            {movie.name} (${movie.price})
                        </option>
                    ))}
                </select>
            </div> */}
            {/* <div className="select-box"> */}
            {/* <div className="select-box__current" tabIndex="1"> */}
            {/* <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="0" value="1" name="Ben" defaultChecked="checked" />
                        <p className="select-box__input-text">Park Cinema</p>
                    </div>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="1" value="park bulvar" name="Ben" />
                        <p className="select-box__input-text">Cheese</p>
                    </div>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="2" value="3" name="Ben" />
                        <p className="select-box__input-text">Milk</p>
                    </div>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="3" value="4" name="Ben" />
                        <p className="select-box__input-text">Honey</p>
                    </div>
                    <div className="select-box__value">
                        <input className="select-box__input" type="radio" id="4" value="5" name="Ben" />
                        <p className="select-box__input-text">Toast</p>
                    </div> */}
            {/* <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                </div>
                <ul className="select-box__list">
                    <li>
                        <label className="select-box__option" htmlFor="0" aria-hidden="true">Park Cinema</label>
                    </li>
                    <li>
                        <label className="select-box__option" htmlFor="1" aria-hidden="true">Cheese</label>
                    </li>
                    <li>
                        <label className="select-box__option" htmlFor="2" aria-hidden="true">Milk</label>
                    </li>
                    <li>
                        <label className="select-box__option" htmlFor="3" aria-hidden="true">Honey</label>
                    </li>
                    <li>
                        <label className="select-box__option" htmlFor="4" aria-hidden="true">Toast</label>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default SelectionCinemas