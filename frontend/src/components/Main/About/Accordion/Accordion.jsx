import React, { useState } from 'react'

//general scss
import "./Accordion.scss"

function Accordion() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <div className='wrapper-accordion'>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "brief-content  active-content" : "brief-content"}
                >
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>

                <div
                    className={toggleState === 2 ? "brief-content  active-content" : "brief-content"}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>

                <div
                    className={toggleState === 3 ? "brief-content  active-content" : "brief-content"}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Accordion