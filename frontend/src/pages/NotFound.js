import React from 'react';
import Image404 from "../images/NotFound404.jpg";


const NotFound = () => {
  return (
    <div className='hero oui'>
        <div className='container'>
            <h1>Page Not Found, Page Introuvable</h1>
            <div>
                <img src={Image404} className="rounded mx-auto d-block text-center " height="300" width="300" alt="..."/>
            </div>
            <div className=" mt-4 text-center ">
               <h3> <a className="text-danger bg-white" href="/">Retour à la page d'acceuil</a></h3>
            </div>

        </div>
    </div>
  );
};

export default NotFound;
