import React from 'react'

//general scss
import "./ContactForm.scss"

function ContactForm() {
    const [formStatus, setFormStatus] = React.useState('Send')

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        const conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <section className='contact-section'>
            <div className="container">
                <div className="contact-form">
                    <h2>    CONTACT WITH US</h2>
                    <form onSubmit={onSubmit}>
                        <div className='form-list'>
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className='form-list' >
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className='form-list'>
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn-contact" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm