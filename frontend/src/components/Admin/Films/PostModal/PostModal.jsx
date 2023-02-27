import React, { useContext } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';
import { v4 as uuidv4 } from 'uuid'

//general scss
import "./PostModal.scss"

function PostModal() {
    const { setShowModal, editData, setEditData, setFilms, showModal, FilmsURL } = useContext(MainContext)

    const getData = async () => {
        await axios.get(FilmsURL).then((res) => setFilms(res.data));
    }

    //!add data
    const addData = async (newFilmData) => {
        try {
            await axios.post(FilmsURL, newFilmData);
            getData(); // reload the films data after adding a new film
            setShowModal(false); // hide the modal
        } catch (error) {
            console.log(error.response);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addData(editData);
    };

    const handleIsNewChange = (event) => {
        setEditData({ ...editData, isNew: event.target.checked });
    };

    const handleSave = async (dataId) => {
        try {
            if (dataId) {
                // Update the state with the edited data
                setFilms(prevState => {
                    const updatedFilms = prevState.map(film => {
                        if (film._id === dataId) {
                            return { ...film, ...editData };
                        }
                        return film;
                    });
                    return updatedFilms;
                });

                await axios.put(`${FilmsURL}/${dataId}`, editData);
            }
            else {
                const newFilm = { ...editData, _id: uuidv4() };
                setFilms(prevState => [newFilm, ...prevState]);
                await axios.post(FilmsURL, newFilm);
            }

            // Reset the state and close the modal
            setShowModal(false);
            setEditData({});
        } catch (error) {
            console.log(error.response);
        }
    };

    const handleCancel = () => {
        setEditData({});
        setShowModal(false);
    };

    return (
        <div className={showModal ? "modal2 show" : "modal2"}>
            <form className="modal-content" onSubmit={onSubmit}>
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
                    type="text"
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
                    type="text"
                    value={editData.poster || ''}
                    onChange={(e) =>
                        setEditData({ ...editData, poster: e.target.value })
                    }
                />
                <label>
                    <input
                        type="checkbox"
                        checked={editData.isNew}
                        onChange={handleIsNewChange}
                    />
                    Is new
                </label>
                <button onClick={() => handleSave(editData._id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostModal