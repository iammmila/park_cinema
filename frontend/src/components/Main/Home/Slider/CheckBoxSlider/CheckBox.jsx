import React, { useContext } from 'react'
import { MainContext } from '../../../../../context/ContextProvider'
import "./style.scss"
function CheckBox() {
    const { filterHandler } = useContext(MainContext)

    return (
        <>
            <div className='filtering'>
                <label htmlFor="2D">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="2D"
                        id="2D"
                    />
                    <span>2D</span>
                </label>
                <label htmlFor="3D">
                    <input
                        type="checkbox"
                        onChange={filterHandler}
                        value="3D"
                        id="3D"
                    />
                    <span>3D</span>
                </label>
            </div>
        </>
    )
}

export default CheckBox