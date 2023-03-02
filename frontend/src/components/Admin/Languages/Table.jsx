import React, { useContext } from 'react'
import { MainContext } from './../../../context/ContextProvider';

//general scss
import "./Table.scss"

//components
import TableLanguages from './TableLanguages/TableLanguages';
import PostModal from './Post/PostModal';

function Table() {
    const { handleFilter, handleAdd } = useContext(MainContext)

    return (
        <section className='admin_languages_section'>
            <div className="container">
                <div className="admin_languages_wrapper">
                    <div className='searching'>
                        <input
                            type="text"
                            placeholder="Filter Name"
                            onChange={handleFilter}
                        />
                        <button onClick={() => handleAdd()}>Add new Film</button>
                    </div>
                    <div className="admin_films_table">
                        <TableLanguages />
                    </div>
                </div>
            </div>
            <PostModal />
        </section>
    )
}

export default Table