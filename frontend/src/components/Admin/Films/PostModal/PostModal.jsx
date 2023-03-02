import React, { useContext } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';

//general scss
import "./PostModal.scss"

function PostModal() {
    const { setShowModal, editData, setEditData, showModal } = useContext(MainContext)

    function onSubmit(e) {
        e.preventDefault(); // Prevent the default form submission

        // Use FormData to send the file along with other form data
        const formData = new FormData();
        formData.append("name", editData.name);
        formData.append("ageLimit", editData.ageLimit);
        formData.append("country", editData.country);
        formData.append("director", editData.director);
        formData.append("actors", editData.actors);
        formData.append("description", editData.description);
        formData.append("trailer", editData.trailer);
        formData.append("date", editData.date);
        formData.append("genres_Id", editData.genres_Id);
        formData.append("languages_Id", editData.languages_Id);
        formData.append("subtitles_Id", editData.subtitles_Id);
        formData.append("formats_Id", editData.formats_Id);
        formData.append("durationMinute", editData.durationMinute);
        formData.append("isNew", editData.isNew);
        formData.append("image", editData.image);

        axios
            .post("http://localhost:5196/api/Films", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Required for file upload
                },
            })
            .then((response) => {
                console.log("Data successfully posted to API");
                // Handle success case here
            })
            .catch((error) => {
                console.log("Error posting data to API:", error);
                // Handle error case here
            });
    }

    const handleCancel = () => {
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
                <button
                >Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostModal