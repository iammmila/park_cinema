import React, { useContext, useEffect } from 'react'

//general scss
import "./style.scss"

//components
import ButtonTicketBuy from './../ButtonTicketBuy/ButtonTicketBuy';
import axios from 'axios';
import { MainContext } from '../../../../context/ContextProvider';
import { useState } from 'react';

function TableSchedule() {
    const { films, setFilms, cinemas, setCinemas } = useContext(MainContext)
    const CinemasURL = "http://localhost:8080/cinemas"
    const FilmsURL = 'http://localhost:8080/films';
    const [general, setGeneral] = useState([])
    const getFilmData = async () => {
        await axios.get(FilmsURL).then((res) => setGeneral(res.data));
    }
    const getCinemaData = async () => {
        await axios.get(CinemasURL).then((res) => setGeneral(res.data));
    }

    useEffect(() => {
        getFilmData();
        getCinemaData();
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
                {/* {
                    general?.map((data) => (
                        <tr key={data._id}>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                            {/* <td>{za}</td> */}
                {/* <td>
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
                        </tr> */}
                {/* )) */}
                {/* } */}
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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
                <tr>
                    <td>Ant-Man and the Wasp: Quantumania</td>
                    <td>14:50</td>
                    <td>Aygun Mall</td>
                    <td>Zal 3</td>
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

            </tbody>
        </table>
    )
}

export default TableSchedule