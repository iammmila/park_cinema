import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import ContactForm from '../../../components/Main/About/ContactForm/ContactForm'

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <ContactForm />
        </>
    )
}

export default Contact