import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../../../context/ContextProvider'
import axios from 'axios';

//general scss
import "./CheckBox.scss"

function CheckBox() {
    const { filterHandler, FormatsURL, formats, setFormats } = useContext(MainContext)

    const getData = async () => {
        await axios.get(FormatsURL).then((res) => setFormats(res.data));
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='filtering'>
            {
                formats?.map((format) => (
                    <div className="checkbox-wrapper-3" key={format._id}>
                        <input type="checkbox" className="check" onChange={filterHandler} id={format.formatName} value={format.formatName} />
                        <label htmlFor={format.formatName} className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect rx={`15`} x="30" y="20" width={50} height={50} stroke="gray" strokeWidth="5" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="red" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>{format.formatName}</span>
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default CheckBox