import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';
import { v4 as uuidv4 } from 'uuid';

//general scss
import "./PostModal.scss"

function PostModal() {
    const { setShowModal, showModal, LanguagesURL, setLanguages } = useContext(MainContext)
    const [languageEdit, setLanguageEdit] = useState({
        _id: uuidv4(),
        name: ""
    })
    const getData = async () => {
        await axios.get(LanguagesURL).then((res) => setLanguages(res.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getData, [])

    function onSubmitData(e) {
        e.preventDefault();

        axios.post(`${LanguagesURL}`, languageEdit)
            .then(response => {
                console.log("success")
                // Handle successful response
            })
            .catch(error => {
                console.log(error)
                // Handle error
            });
    }

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div className={showModal ? "modal3 show" : "modal3"}>
            <form className="modal-content" onSubmit={onSubmitData}>
                <h2>Create Languages Information</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={languageEdit.name || ""}
                    onChange={(e) =>
                        setLanguageEdit({ ...languageEdit, name: e.target.value })
                    }
                />
                <button
                >Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostModal