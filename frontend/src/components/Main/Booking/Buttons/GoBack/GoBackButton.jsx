import React from 'react'

//general scss
import "./GoBackButton.scss"

function GoBackButton() {
    function goBack() {
        window.history.back();
    }

    return (
        <button className='go_back' onClick={goBack}>
            <span > Go Back</span>
        </button>
    )
}

export default GoBackButton