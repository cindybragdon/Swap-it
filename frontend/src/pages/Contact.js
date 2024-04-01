import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/contactImage.jpg"

const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`
    }

    return (

        <div className="row">
            <div className="col-sm">
                <div className='card justify-content-center min-vh-100' style={sectionStyle}>
                </div>
            </div>
            <div className="col-sm" id="container-contact-page">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;

