import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/contactImage.jpg"

const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`
    }

    return (

        <div class="row">
            <div class="col-sm">
                <div className='card justify-content-center min-vh-100' style={sectionStyle}>
                </div>
            </div>
            <div class="col-sm" id="container-contact-page">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;

