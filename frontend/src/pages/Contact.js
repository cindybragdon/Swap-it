import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/contactImage.jpg"

const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`,
        minHeight: '85vh',
        backgroundRepeat: 'no repeat',


    }

    return (

        <div  id="container-contact-main" >

            <div  style={sectionStyle}>

            </div>
            <div  id="container-contact-page">
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;

