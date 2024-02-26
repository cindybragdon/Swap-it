import React from 'react';
import ContactForm from "../components/ContactForm";

const Contact = () => {

  return (
    <div className='hero oui'>
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
