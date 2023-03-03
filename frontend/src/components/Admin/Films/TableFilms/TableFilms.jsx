import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';
import { Link } from 'react-router-dom';

//general scss 
import "./TableFilms.scss"

//icons
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { CgMoreO } from "react-icons/cg"

//components
import Modal from './../Modal/Modal';

function TableFilms() {
    const { filtered, films, setFilms, setEditData, setShowModal4, FilmsURL } = useContext(MainContext)
    const [soonFilms, setSoonFilms] = useState([])

    //url
    const SOONfilms = "http://localhost:5196/api/Films?isNew=true"

    const getData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }
    const addData = async () => {
        await axios.get(SOONfilms).then((res) => setSoonFilms(res.data));
    }
    useEffect(() => {
        getData();
        addData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // //! DELETE FILM
    const deleteFilm = async (id) => {
        await axios.delete(`http://localhost:5196/api/Films/${id}`);
        console.log(`the film is deleted: ${id}`)
        setFilms(
            films.filter((post) => {
                return post.id !== id;
            })
        );

        getData();
        addData();
    };

    //! UPDATE FILM
    const handleEdit = async (data) => {
        setEditData(data);
        setShowModal4(true);
    };

    return (
        <>
            <table className='admin_table_part'>
                <thead>
                    <tr>
                        <td>Poster</td>
                        <td>Name</td>
                        <td>Date</td>
                        <td>Delete</td>
                        <td>Update</td>
                        <td>More</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        films?.filter((data) => {
                            return filtered.trim().toLowerCase() === ""
                                ? data
                                : data.name.toLowerCase().includes(filtered.toLowerCase());
                        })
                            .map((data) => {
                                const date = new Date(data.date);
                                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                const formattedDate = date.toLocaleDateString('en-US', options);
                                return (
                                    <tr key={data.id}>
                                        <td>
                                            <img src={data.uri} alt="poster" /></td>
                                        <td>{data.name}</td>
                                        <td> {formattedDate}</td>
                                        <td>
                                            <MdDelete className='admin_icons' onClick={() => deleteFilm(data.id)} />
                                        </td>
                                        <td>
                                            <FiEdit className='admin_icons' onClick={() => handleEdit(data)} />
                                        </td>
                                        <td>
                                            <Link target={`_blank`} to="http://localhost:5196/swagger/index.html"><CgMoreO className='admin_icons' /></Link>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    {
                        soonFilms?.filter((data) => {
                            return filtered.trim().toLowerCase() === ""
                                ? data
                                : data.name.toLowerCase().includes(filtered.toLowerCase());
                        })
                            .map((data) => {
                                const date = new Date(data.date);
                                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                                const formattedDate = date.toLocaleDateString('en-US', options);
                                return (
                                    <tr key={data.id}>
                                        <td>
                                            <img src={data.uri} alt="poster" /></td>
                                        <td>{data.name}</td>
                                        <td> {formattedDate}</td>
                                        <td>
                                            <MdDelete className='admin_icons' onClick={() => deleteFilm(data.id)} />
                                        </td>
                                        <td>
                                            <FiEdit className='admin_icons' onClick={() => handleEdit(data)} />
                                        </td>
                                        <td>
                                            <Link target={`_blank`} to="http://localhost:5196/swagger/index.html"><CgMoreO className='admin_icons' /></Link>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            <Modal />
        </>
    )
}

export default TableFilms