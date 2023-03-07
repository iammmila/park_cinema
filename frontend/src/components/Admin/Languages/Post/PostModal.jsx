import React, { useContext, useState } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';

//general scss
import "./PostModal.scss"

function PostModal() {
    const { setShowModal2, setLanguages, languages, showModal2, LanguagesURL } = useContext(MainContext)
    const [languageEdit, setLanguageEdit] = useState({
        name: ""
    })

    const getData = async () => {
        await axios.post(LanguagesURL, languageEdit)
            .then(response => {
                // Update the component's state with the new data
                setLanguageEdit({ name: "" })
                setShowModal2(false)
                const createdData = response.data;
                setLanguages([...languages, createdData]);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
  const onSubmitData = (e) => {
    e.preventDefault();
    getData();
  };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal2(false);
    };

    return (
        <div className={showModal2 ? "modal3 show" : "modal3"}>
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
                <button type="button" onClick={getData}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostModal