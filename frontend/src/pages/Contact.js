import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/contactImage.jpg"
const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`
    }

  return (

    <div className='card justify-content-center min-vh-100' style={sectionStyle}>
        <div className="container mt-5 mb-5 d-flex justify-content-end text-center">
            <ContactForm />
        </div>
    </div>

  );
};

export default Contact;






