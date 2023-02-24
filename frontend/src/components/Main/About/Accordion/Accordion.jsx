import React, { useContext, useEffect } from 'react'
import { MainContext } from './../../../../context/ContextProvider';
import axios from 'axios';

//general scss
import "./Accordion.scss"

function Accordion() {
    const { cinemas, setCinemas, CinemasURL, toggleState, setToggleState, toggleTab } = useContext(MainContext)

    const getData = async () => {
        await axios.get(CinemasURL).then((res) => {
            setCinemas(res.data);
            setToggleState(res.data[0]._id);
        })
    };


    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='wrapper-accordion'>
            <div className="bloc-tabs">

                {
                    cinemas?.map((data) => (
                        <button key={data._id}
                            className={toggleState === data._id ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(data._id)}
                        >
                            {data.cinemaName}
                        </button>
                    ))
                }
            </div>
            <div className="content-tabs">
                {
                    cinemas?.map((data) => (
                        <div
                            key={data._id}
                            className={toggleState === data._id ? "brief-content  active-content" : "brief-content"}
                        >
                            <h2>{data.cinemaName}</h2>
                            <hr />
                            <img src={data.images} alt="" />
                            {/* <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                                vel voluptatum?
                            </p> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion