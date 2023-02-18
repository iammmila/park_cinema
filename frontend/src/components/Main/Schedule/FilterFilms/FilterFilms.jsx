import React from 'react'
import SelectionCinemas from '../SelectionCinemas/SelectionCinemas'

//general scss
import "./style.scss"

function FilterFilms() {
    return (
        <div className='filtering_wrapper'>
            <ul className='filtering_formats'>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" id="all" />
                        <label htmlFor="all" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>All</span>
                        </label>
                    </div>
                    {/* <label htmlFor="english">
                        <input
                            type="checkbox"
                            // onChange={filterHandler}
                            value="english"
                            id="english"
                        />
                        <span>all of them</span>
                    </label> */}
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" id="2d" />
                        <label htmlFor="2d" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>2D</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" id="3d" />
                        <label htmlFor="3d" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>3D</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" id="imax" />
                        <label htmlFor="imax" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                                </g>
                            </svg>
                            <span>IMAX</span>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="checkbox-wrapper-3">
                        <input type="checkbox" className="check" id="laser" />
                        <label htmlFor="laser" className="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
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
                    <input type="checkbox" className="check" id="check1" />
                    <label htmlFor="check1" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in turkish</span>
                    </label>
                </div>
                <div className="checkbox-wrapper-3">
                    <input type="checkbox" className="check" id="check2" />
                    <label htmlFor="check2" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in english</span>
                    </label>
                </div>
                <div className="checkbox-wrapper-3">
                    <input type="checkbox" className="check" id="check3" />
                    <label htmlFor="check3" className="label">
                        <svg width="45" height="45" viewBox="0 0 95 95">
                            <rect x="30" y="20" width={50} height={50} stroke="black" fill="none"></rect>
                            <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className="path1"></path>
                            </g>
                        </svg>
                        <span>Movies in azerbaijan</span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FilterFilms