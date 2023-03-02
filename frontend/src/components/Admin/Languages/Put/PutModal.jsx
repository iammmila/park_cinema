import React, { useContext, useState } from 'react'
import { MainContext } from '../../../../context/ContextProvider';
import axios from 'axios';

//general scss
import "./PutModal.scss"

function PutModal() {
    const { setShowModal, setFilms, showModal, LanguagesURL, setLanguages, languages } = useContext(MainContext)

    const [editLanguages, setEditLanguages] = useState({
        name: ""
    })

    const getData = async () => {
        await axios.get(LanguagesURL).then((res) => setLanguages(res.data));
    }

    // const handleSave = async (dataId) => {
    //     try {
    //         // Update the state with the edited data
    //         setFilms(prevState => {
    //             const updatedLanguages = prevState.map(language => {
    //                 if (language._id === dataId) {
    //                     return { ...languages, ...editLanguages };
    //                 }
    //                 return language;
    //             });
    //             return updatedLanguages;

    //         });

    //         // Send the PUT request with the updated data
    //         await axios.put(`${LanguagesURL}/${dataId}`, editLanguages);
    //         console.log(editLanguages)
    //         getData();
    //         setShowModal(false);
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // };

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
        setShowModal(false);
    };

    return (
        <div className={showModal ? "modal4 show" : "modal4"}>
            <div className="modal-content">
                <h2>Edit Film Information</h2>
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