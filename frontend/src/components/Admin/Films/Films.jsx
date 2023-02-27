import React, { useContext } from 'react'
import { MainContext } from './../../../context/ContextProvider';

//general scss
import "./Films.scss"

//components
import TableFilms from './TableFilms/TableFilms'
import PostModal from './PostModal/PostModal';

function Films() {


    const { handleAdd, handleFilter } = useContext(MainContext)

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
                        <button onClick={() => handleAdd()}>Add new Film</button>
                    </div>
                    <div className="admin_films_table">
                        <TableFilms />
                    </div>
                </div>
            </div>
            <PostModal />
        </section>
    )
}

export default Films