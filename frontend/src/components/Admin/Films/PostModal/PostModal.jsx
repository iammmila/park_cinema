import React, { useContext, useState } from 'react'
import axios from 'axios';
import { MainContext } from './../../../../context/ContextProvider';

//yup
import { useForm } from "react-hook-form";
import { postSchema } from './../../../../schema/post';
import { yupResolver } from "@hookform/resolvers/yup";

//general scss
import "./PostModal.scss"

function PostModal() {
    const { setShowModal, editData, setEditData, showModal } = useContext(MainContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(postSchema) });

    function onSubmit(e) {
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
                setShowModal(false);
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
            <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
                <h2>Create Film Information</h2>
                <div className='wrapper_sectionsss'>
                    <div >
                        <label>Name:</label>
                        <input
                            {...register("name")}
                            value={editData.name || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, name: e.target.value })
                            }
                            name="name"
                            placeholder="Name of Film"
                            id="name"
                        />
                        {errors.name ? (
                            <span style={{ color: "red" }}>{errors.name.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Age Limit:</label>
                        <input
                            {...register("ageLimit")}
                            value={editData.ageLimit || ""}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, ageLimit: e.target.value })
                            }
                            name="ageLimit"
                            placeholder="Age Limit"
                            id="ageLimit"
                        />
                        {errors.ageLimit ? (
                            <span style={{ color: "red" }}>{errors.ageLimit.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Country:</label>
                        <input
                            {...register("country")}
                            value={editData.country || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, country: e.target.value })
                            }
                            name="country"
                            placeholder="country"
                            id="country"
                        />
                        {errors.country ? (
                            <span style={{ color: "red" }}>{errors.country.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Director:</label>
                        <input
                            {...register("director")}
                            value={editData.director || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, director: e.target.value })
                            }
                            name="director"
                            placeholder="director"
                            id="director"
                        />
                        {errors.director ? (
                            <span style={{ color: "red" }}>{errors.director.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Actors:</label>
                        <input
                            {...register("actors")}
                            value={editData.actors || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, actors: e.target.value })
                            }
                            name="actors"
                            placeholder="Names of Actors"
                            id="actors"
                        />
                        {errors.actors ? (
                            <span style={{ color: "red" }}>{errors.actors.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Description:</label>
                        <input
                            {...register("description")}
                            value={editData.description || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, description: e.target.value })
                            }
                            name="description"
                            placeholder="description"
                            id="description"
                        />
                        {errors.description ? (
                            <span style={{ color: "red" }}>{errors.description.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Trailer( Id of youtube video):</label>
                        <input
                            {...register("trailer")}
                            value={editData.trailer || ""}
                            type="text"
                            onChange={(e) =>
                                setEditData({ ...editData, trailer: e.target.value })
                            }
                            name="trailer"
                            placeholder="id of youtube trailer"
                            id="trailer"
                        />
                        {errors.trailer ? (
                            <span style={{ color: "red" }}>{errors.trailer.message}</span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div>
                        <label>Date:</label>
                        <input
                            {...register("date")}
                            value={editData.date || ""}
                            type="date"
                            onChange={(e) =>
                                setEditData({ ...editData, date: e.target.value })
                            }
                            name="date"
                            placeholder="Date of Film"
                            id="date"
                        />
                        {errors.date ? (
                            <span style={{ color: "red" }}>{errors.date.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Poster:</label>
                        <input
                            {...register("image")}
                            type="file"
                            style={{ color: "gray" }}
                            onChange={(e) =>
                                setEditData({ ...editData, image: e.target.files[0] })
                            }
                            name="image"
                            placeholder="Load image"
                            id="image"
                        />
                        {errors.image ? (
                            <span style={{ color: "red" }}>{errors.image.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Genres of Film:</label>
                        <input
                            {...register("genres_Id")}
                            value={editData.genres_Id || ""}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, genres_Id: parseInt(e.target.value) })
                            }
                            name="genres_Id"
                            placeholder="please write id of Genres"
                            id="genres_Id"
                        />
                        {errors.genres_Id ? (
                            <span style={{ color: "red" }}>{errors.genres_Id.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Languages of Film:</label>
                        <input
                            {...register("languages_Id")}
                            value={editData.languages_Id || ""}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, languages_Id: parseInt(e.target.value) })
                            }
                            name="languages_Id"
                            placeholder="please write id of Language"
                            id="languages_Id"
                        />
                        {errors.languages_Id ? (
                            <span style={{ color: "red" }}>{errors.languages_Id.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Subtitle of Film:</label>
                        <input
                            {...register("subtitles_Id")}
                            value={editData.subtitles_Id || ""}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, subtitles_Id: parseInt(e.target.value) })
                            }
                            name="subtitles_Id"
                            placeholder="please write id of Subtitle"
                            id="subtitles_Id"
                        />
                        {errors.subtitles_Id ? (
                            <span style={{ color: "red" }}>{errors.subtitles_Id.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Format of Film:</label>
                        <input
                            {...register("formats_Id")}
                            value={editData.formats_Id || ""}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, formats_Id: parseInt(e.target.value) })
                            }
                            name="formats_Id"
                            placeholder="please write id of format"
                            id="formats_Id"
                        />
                        {errors.formats_Id ? (
                            <span style={{ color: "red" }}>{errors.formats_Id.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Duration minute:</label>
                        <input
                            {...register("durationMinute")}
                            value={editData.durationMinute || ''}
                            type="number"
                            onChange={(e) =>
                                setEditData({ ...editData, durationMinute: parseInt(e.target.value) })
                            }
                            name="durationMinute"
                            placeholder="please write minutes"
                            id="durationMinute"
                        />
                        {errors.durationMinute ? (
                            <span style={{ color: "red" }}>{errors.durationMinute.message}</span>
                        ) : (
                            <></>
                        )}
                        <label>Is it new?  </label>
                        <input
                            {...register("isNew")}
                            checked={editData.isNew}
                            type="checkbox"
                            onChange={(e) => setEditData({ ...editData, isNew: e.target.checked })}
                            name="isNew"
                            id="isNew"
                        />
                        {errors.isNew ? (
                            <span style={{ color: "red" }}>{errors.isNew.message}</span>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <button >Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default PostModal