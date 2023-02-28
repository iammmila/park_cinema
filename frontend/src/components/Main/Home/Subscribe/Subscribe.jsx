import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { subscribeSchema } from "../../../../schema/subscribe";
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';

//sweet alert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

//icons
import { IoIosArrowForward } from "react-icons/io"

//general scss
import "./Subscribe.scss"

function Subscribe() {
  const [state, setState] = useState({
    email: ""
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(subscribeSchema) });

  const SubscriberURL = axios.create({
    baseURL: "http://localhost:8080",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addState = async () => {
    await SubscriberURL.post("/subscriber", state);
    setState({
      email: ""
    });
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have been subscribed',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(data);
    addState();

  };

  return (
    <section className='subscribe'>
      <div className="container">
        <div className="subscribe_wrapper">
          <h2>Every month, a letter from an amazing creative film to you.</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email")}
              value={state.email}
              type="text"
              onChange={handleChange}
              name="email"
              placeholder='your email here'
              id="email"
            />
            <button>
              <IoIosArrowForward />
            </button>
          </form>
          {errors.email ? (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          ) : (
            <></>
          )}
          <span>Keep us close through our "social media" accounts</span>
          <span>Follow us on <Link to="https://www.twitter.com" target={'_blank'}>Twitter</Link>, <Link to="https://www.facebook.com" target={'_blank'}>Facebook</Link> & <Link to="https://www.instagram.com" target={'_blank'}>Instagram</Link></span>
        </div>
      </div>
    </section>
  )
}

export default Subscribe