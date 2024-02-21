import React from 'react';

const Contact = () => {

//Ceci est un test

  function handleSubmit() {
   
    alert('You clicked submit.');
  };
  

  return (
    <div className='hero oui'>
      <form className='container' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>
          <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="File"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
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
