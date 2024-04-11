import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/ContactBG.jpg"

const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`,
        minHeight: '85vh',
        backgroundRepeat: 'no repeat',
        backgroundSize: 'cover',
        border: 'white solid 3px'
    }

    return (

        <div  id="container-contact-main"style={sectionStyle} >

            <div  id="container-contact-page">
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;
