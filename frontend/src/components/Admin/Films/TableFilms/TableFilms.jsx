import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';

//general scss 
import "./TableFilms.scss"

//icons
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { CgMoreO } from "react-icons/cg"

//components
import Modal from './../Modal/Modal';

function TableFilms() {
    const { filtered, films, setFilms, setEditData, setShowModal, FilmsURL } = useContext(MainContext)

    const axiosInstance = axios.create({
        baseURL: FilmsURL
    });

    const getData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //! DELETE FILM
    const deleteFilm = async (id) => {
        await axiosInstance.delete(`/${id}`);
        console.log(`the film is deleted: ${id}`)
        setFilms(
            films.filter((post) => {
                return post._id !== id;
            })
        );
        getData();
    };

    //! UPDATE FILM
    const handleEdit = async (data) => {
        setEditData(data);
        setShowModal(true);
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
                            .map((data) => (
                                <tr key={data._id}>
                                    <td>
                                        <img src={data.poster} alt="poster" /></td>
                                    <td>{data.name}</td>
                                    <td>{data.date}</td>
                                    <td>
                                        <MdDelete className='admin_icons' onClick={() => deleteFilm(data._id)} />
                                    </td>
                                    <td>
                                        <FiEdit className='admin_icons' onClick={() => handleEdit(data)} />
                                    </td>
                                    <td>
                                        <CgMoreO className='admin_icons' />
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            <Modal />
        </>
    )
}

export default TableFilms