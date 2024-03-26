import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/contactImage.jpg"
const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`
    }

  return (

    <div className='renderingElement ' style={sectionStyle}>
        <ContactForm />
    </div>

  );
};

export default Contact;






