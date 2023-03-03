import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../../context/ContextProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

//icons
import { CgMoreO } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

//components
import PutModal from './../Put/PutModal';

function TableLanguages() {
    const { filtered, setEditData, setShowModal3, LanguagesURL, languages, setLanguages } = useContext(MainContext)

    const getData = async () => {
        await axios.get(LanguagesURL).then((res) => setLanguages(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // //! DELETE FILM
    const deleteFilm = async (id) => {
        await axios.delete(`${LanguagesURL}/${id}`);
        console.log(`the language is deleted: ${id}`)
        setLanguages(
            languages.filter((post) => {
                return post._id !== id;
            })
        );

        getData();
    };

    //! UPDATE FILM
    const handleEdit = async (data) => {
        setEditData(data);
        setShowModal3(true);
    };

    return (
        <>
            <table className='admin_table_part'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>Delete</td>
                        <td>Update</td>
                        <td>More</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        languages?.filter((data) => {
                            return filtered.trim().toLowerCase() === ""
                                ? data
                                : data.name.toLowerCase().includes(filtered.toLowerCase());
                        })
                            .map((data) => (
                                <tr key={data._id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <MdDelete className='admin_icons' onClick={() => deleteFilm(data._id)} />
                                    </td>
                                    <td>
                                        <FiEdit className='admin_icons' onClick={() => handleEdit(data)} />
                                    </td>
                                    <td>
                                        <Link target={`_blank`} to="http://localhost:5196/swagger/index.html"><CgMoreO className='admin_icons' /></Link>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            <PutModal />
        </>)
}

export default TableLanguages