import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { contactSchema } from "../../../../schema/contact";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

//sweet alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

//general scss
import "./ContactForm.scss"

function ContactForm() {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({ resolver: yupResolver(contactSchema) });

    const SubscriberURL = axios.create({
        baseURL: "http://localhost:8080",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const addState = async () => {
        await SubscriberURL.post("/contact", state);
        setState({
            name: "",
            email: "",
            message: ""
        });
    };

    const onSubmit = (data, e) => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You will be contacted as soon as possible',
            showConfirmButton: false,
            timer: 1500
        })
        console.log(data);
        addState();
    };
    return (
        <section className='contact-section'>
            <div className="container">
                <div className="contact-form">
                    <div className="screen-contact">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button"></div>
                                <div className="screen-header-button"></div>
                                <div className="screen-header-button"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div className="app-contact">CONTACT INFO : (+994 12) 598 74 14</div>
                            </div>
                            <div className="screen-body-item">
                                <form onSubmit={handleSubmit(onSubmit)} className="app-form">
                                    <div className="app-form-group">
                                        <input
                                            {...register("name")}
                                            value={state.name}
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="app-form-control"
                                            placeholder="Name"
                                        />
                                        {errors.name ? (
                                            <span style={{ color: "red" }}>{errors.name.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            {...register("email")}
                                            value={state.email}
                                            onChange={handleChange}
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="app-form-control"
                                            placeholder="Email"
                                        />
                                        {errors.email ? (
                                            <span style={{ color: "red" }}>{errors.email.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div className="app-form-group message">
                                        <input
                                            {...register("message")}
                                            value={state.message}
                                            onChange={handleChange}
                                            type="text"
                                            name="message"
                                            id="message"
                                            className="app-form-control"
                                            placeholder="Message"
                                        />
                                        {errors.message ? (
                                            <span style={{ color: "red" }}>{errors.message.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button" disabled={!state.name || !state.email || !state.message || isSubmitting}>SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm