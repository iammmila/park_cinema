import React, { useContext, useEffect } from 'react'

//general scss
import "./TableSchedule.scss"

//components
import ButtonTicketBuy from './../ButtonTicketBuy/ButtonTicketBuy';
import axios from 'axios';
import { MainContext } from '../../../../context/ContextProvider';
import { Link } from 'react-router-dom';

function TableSchedule() {
    // eslint-disable-next-line no-unused-vars
    const { films, setFilms, cinemas, setCinemas, CinemasURL, FilmsURL } = useContext(MainContext)
    const getFilmData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }

    useEffect(() => {
        getFilmData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <td>MOVIE</td>
                    <td>SESSION</td>
                    <td>CINEMA</td>
                    <td>HALL</td>
                    <td>FORMAT</td>
                    <td>booking</td>
                </tr>
            </thead>
            <tbody>
                {
                    films?.map((data) => (
                        <tr key={data.id}>
                            <td><Link to={`/film/${data.id}`}>{data.name} </Link></td>
                            <td>{data.date}</td>
                            <td><Link to={`/cinemas/${data.id}`}>{data.name} </Link></td>
                            {/* <td>{data.name}</td> */}
                            <td><Link to={`/cinemas/${data.id}`}>{data.name} </Link></td>
                            <td>
                                <div className='wrapper_format'>
                                    3d
                                </div>
                                <div className='wrapper_format'>
                                    tr
                                </div>
                            </td>
                            <td>
                                <ButtonTicketBuy />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableSchedule