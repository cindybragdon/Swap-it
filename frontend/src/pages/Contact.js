import React from 'react';
import ContactForm from "../components/ContactForm";
import ImageContact from "../images/PageContact2.jpg"
const Contact = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageContact})`
    }

  return (
    <div className='hero oui ' style={sectionStyle}>
        <ContactForm />
    </div>
  );
};

export default Contact;






/**
 * 

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Message:
          <textarea rows="3">Exemple</textarea>
        </label>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Message:
          <textarea rows="3">Exemple</textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
 */
