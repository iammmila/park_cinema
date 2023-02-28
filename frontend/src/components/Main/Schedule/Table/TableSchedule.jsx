import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//general scss
import "./TableSchedule.scss"

//components
import ButtonTicketBuy from './../ButtonTicketBuy/ButtonTicketBuy';


function TableSchedule() {
    const [sessions, setSessions] = useState([])

    const SessionsURL = "http://localhost:8080/sessions"

    const getSessionData = async () => {
        await axios.get(SessionsURL).then((res) => setSessions(res.data));
    }

    useEffect(() => {
        getSessionData();
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
                {sessions?.map((data) => (
                    <tr key={data.id}>
                        <td>
                            <Link to={`/film/${data.film[0].id}`}>{data.film[0].name}</Link>
                        </td>
                        <td>
                            {new Date(data.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td>
                            <Link to={`/cinemas/${data.hall[0].cinema[0].id}`}>{data.hall[0].cinema[0].name}</Link>
                        </td>
                        <td>
                            <Link to={`/halls/${data.hall[0].id}`}>{data.hall[0].hallName}</Link>
                        </td>
                        <td>
                            <div className='wrapper_format'>{data.format[0].name}</div>
                            {data.subtitle[0] && (
                                <div className='wrapper_format'>{data.subtitle[0].name}</div>
                            )}
                        </td>
                        <td>
                            <ButtonTicketBuy />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableSchedule