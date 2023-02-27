import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../context/ContextProvider';
import axios from 'axios';

//general scss
import "./Films.scss"

//components
import TableFilms from './TableFilms/TableFilms'

function Films() {

    const { handleFilter } = useContext(MainContext)

    return (
        <section className='admin_films_section'>
            <div className="container_admin">
                <div className="admin_films_wrapper">
                    <div className='searching'>
                        <input
                            type="text"
                            placeholder="Filter Name"
                            onChange={handleFilter}
                        />
                    </div>
                    <div className="admin_films_table">
                        <TableFilms />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Films