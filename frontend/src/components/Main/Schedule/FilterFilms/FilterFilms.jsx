import React, { useContext } from 'react'
import { MainContext } from '../../../../context/ContextProvider'
import SelectionCinemas from '../SelectionCinemas/SelectionCinemas'

//general scss
import "./style.scss"

function FilterFilms() {
    const { filterHandler } = useContext(MainContext);

    return (
        <div className='filtering_wrapper'>
            <ul className='filtering_formats'>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" onChange={filterHandler} id="all" value="all" />
                        <label htmlFor="all" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>All</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" onChange={filterHandler} id="2D" value="2D" />
                        <label htmlFor="2D" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>2D</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" onChange={filterHandler} id="3D" value="3D" />
                        <label htmlFor="3D" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>3D</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" onChange={filterHandler} id="IMAX" value="IMAX" />
                        <label htmlFor="IMAX" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>IMAX</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" onChange={filterHandler} id="Laser" value="Laser" />
                        <label htmlFor="Laser" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>Laser</span>
                        </label>
                    </div>
                </li>
            </ul>
            <div className='filtering_cinemas'>
                <SelectionCinemas />
            </div>
            <div className='filtering_languages'>
                <div className="checkbox-wrapper-3">
                    <input type="checkbox" className="check" onChange={filterHandler} id="Turkish" value="Turkish" />
                    <label htmlFor="Turkish" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in Turkish</span>
                    </label>
                </div>
                <div className="checkbox-wrapper-3">
                    <input type="checkbox" className="check" onChange={filterHandler} id="English" value="English" />
                    <label htmlFor="English" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in English</span>
                    </label>
                </div>
                <div className="checkbox-wrapper-3">
                    <input type="checkbox" className="check" onChange={filterHandler} id="Azerbaijan" value="Azerbaijan"/>
                    <label htmlFor="Azerbaijan" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="gray" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="gray" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in Azerbaijan</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterFilms