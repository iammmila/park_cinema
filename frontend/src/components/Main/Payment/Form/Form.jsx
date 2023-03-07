import { Swal } from 'sweetalert2/dist/sweetalert2.js';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { paymentSchema } from './../../../../schema/payment';
import axios from 'axios';

//general scss
import "./Form.scss"
import GoBackButton from './../../Booking/Buttons/GoBack/GoBackButton';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        cardDetail: "",
        month: "",
        year: "",
        cvv: ""
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(paymentSchema) });
    const PaymentURL = axios.create({
        baseURL: "http://localhost:8080",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const addState = async () => {
        await PaymentURL.post("/payment", state);
        setState({
            name: "",
            email: "",
            cardDetail: "",
            month: "",
            year: "",
            cvv: ""
        });
    };

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        addState();
        navigate('/')
    };
    
    return (
        <>
            <form className='payment-form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Payment</h2>
                <label>Full Name:</label>
                <input
                    {...register("name")}
                    value={state.name}
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    id="name"
                />
                {errors.name ? (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                ) : (
                    <></>
                )}
                <label>Email:</label>
                <input
                    {...register("email")}
                    value={state.email}
                    type="text"
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    id="email"
                />
                {errors.email ? (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                ) : (
                    <></>
                )}
                <label>16 digit number of card:</label>
                <input
                    {...register("cardDetail")}
                    value={state.cardDetail}
                    type="number"
                    onChange={handleChange}
                    name="cardDetail"
                    placeholder="Card's 16digit number"
                    id="cardDetail"
                    maxLength={16}
                />
                {errors.cardDetail ? (
                    <span style={{ color: "red" }}>{errors.cardDetail.message}</span>
                ) : (
                    <></>
                )}
                <label>Month:</label>
                <input
                    {...register("month")}
                    value={state.month}
                    type="number"
                    onChange={handleChange}
                    name="month"
                    placeholder="Expiry month"
                    id="month"
                />
                {errors.month ? (
                    <span style={{ color: "red" }}>{errors.month.message}</span>
                ) : (
                    <></>
                )}
                <label>Year:</label>
                <input
                    {...register("year")}
                    value={state.year}
                    type="text"
                    onChange={handleChange}
                    name="year"
                    placeholder="Expiry year"
                    id="year"
                />
                {errors.year ? (
                    <span style={{ color: "red" }}>{errors.year.message}</span>
                ) : (
                    <></>
                )}
                <label>CVV:</label>
                <input
                    {...register("cvv")}
                    value={state.cvv}
                    type="text"
                    onChange={handleChange}
                    name="cvv"
                    placeholder="CVV"
                    id="cvv"
                    maxLength={4}
                />
                {errors.cvv ? (
                    <span style={{ color: "red" }}>{errors.cvv.message}</span>
                ) : (
                    <></>
                )}
                <button className="button-867" >
                    <span >  Buy </span>
                </button>
            </form>
            <div style={{ margin: "0 auto" }}>
                <GoBackButton />
            </div>
        </>
    )
}

export default Form