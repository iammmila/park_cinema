import React, { useContext, useState } from 'react'
import { MainContext } from '../../../../context/ContextProvider';
import axios from 'axios';

//general scss
import "./PutModal.scss"

function PutModal() {
    const { setShowModal3, showModal3, LanguagesURL} = useContext(MainContext)

    const [editLanguages, setEditLanguages] = useState({
        name: ""
    })


    function handleSave(id) {
        axios.put(`${LanguagesURL}/${id}`, editLanguages)
            .then(response => {
                // Handle successful response
                console.log("success")
            })
            .catch(error => {
                console.log("error" + error);
                // Handle error
            });
    }

    const handleCancel = () => {
        setShowModal3(false);
    };

    return (
        <div className={showModal3 ? "modal4 show" : "modal4"}>
            <div className="modal-content">
                <h2>Edit Lnaguage Information</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={editLanguages.name || ""}
                    onChange={(e) =>
                        setEditLanguages({ ...editLanguages, name: e.target.value })
                    }
                />
                <button onClick={() => handleSave(editLanguages._id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default PutModal