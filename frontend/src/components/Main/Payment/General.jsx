import React from 'react'

//general scss
import "./General.scss"

//components
import Form from './Form/Form';

function General() {
    return (
        <div className='general_form'>
            <div className="container">
                <div className="form_payment">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default General