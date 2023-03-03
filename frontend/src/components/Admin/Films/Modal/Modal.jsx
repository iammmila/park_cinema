import React, { useContext } from 'react'
import { MainContext } from '../../../../context/ContextProvider';
import axios from 'axios';

//general scsss
import "./Modal.scss"

function Modal() {
    const { setShowModal4, editData, setEditData, setFilms, showModal4, FilmsURL } = useContext(MainContext)

    const getData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }

    const handleSave = async (dataId) => {
        try {
            // Update the state with the edited data
            setFilms(prevState => {
                const updatedFilms = prevState.map(film => {
                    if (film.id === dataId) {
                        return { ...film, ...editData };
                    }
                    return film;
                });
                return updatedFilms;

            });

            // Send the PUT request with the updated data
            await axios.put(`${FilmsURL}/${dataId}`, editData);
            console.log(editData)
            getData();
            setShowModal4(false);
        } catch (error) {
            console.log(error.response);
        }
    };

    const handleCancel = () => {
        // setEditData({});
        setShowModal4(false);
    };

    return (
        <div className={showModal4 ? "modal show" : "modal"}>
            <div className="modal-content">
                <h2>Edit Film Information</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={editData.name || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                    }
                />
                <label>ageLimit:</label>
                <input
                    type="number"
                    value={editData.ageLimit || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, ageLimit: e.target.value })
                    }
                />
                <label>country:</label>
                <input
                    type="text"
                    value={editData.country || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, country: e.target.value })
                    }
                />
                <label>director:</label>
                <input
                    type="text"
                    value={editData.director || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, director: e.target.value })
                    }
                />
                <label>actors:</label>
                <input
                    type="text"
                    value={editData.actors || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, actors: e.target.value })
                    }
                />
                <label>description:</label>
                <input
                    type="text"
                    value={editData.description || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, description: e.target.value })
                    }
                />
                <label>trailer:</label>
                <input
                    type="text"
                    value={editData.trailer || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, trailer: e.target.value })
                    }
                />
                <label>date:</label>
                <input
                    type="date"
                    value={editData.date || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, date: e.target.value })
                    }
                />
                <label>poster:</label>
                <input
                    type="file"
                    onChange={(e) =>
                        setEditData({ ...editData, image: e.target.files[0] })
                    }
                />
                <label>Genres:</label>
                <input
                    type="number"
                    value={editData.genres_Id || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, genres_Id: parseInt(e.target.value) })
                    }
                />

                <label>Languages:</label>
                <input
                    type="number"
                    value={editData.languages_Id || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, languages_Id: parseInt(e.target.value) })
                    }
                />

                <label>Subtitles:</label>
                <input
                    type="number"
                    value={editData.subtitles_Id || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, subtitles_Id: parseInt(e.target.value) })
                    }
                />

                <label>Formats:</label>
                <input
                    type="number"
                    value={editData.formats_Id || ""}
                    onChange={(e) =>
                        setEditData({ ...editData, formats_Id: parseInt(e.target.value) })
                    }
                />
                <label>durationMinute:</label>
                <input
                    type="number"
                    value={editData.durationMinute || ''}
                    onChange={(e) =>
                        setEditData({ ...editData, durationMinute: parseInt(e.target.value) })
                    }
                />

                <label>
                    <input
                        type="checkbox"
                        checked={editData.isNew}
                        onChange={(e) => setEditData({ ...editData, isNew: e.target.checked })}
                    />
                    Is new
                </label>
                <button onClick={() => handleSave(editData.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal