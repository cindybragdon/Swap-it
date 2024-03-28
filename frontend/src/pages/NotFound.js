import React from 'react';
import Image404 from "../images/NotFound404.jpg";


const NotFound = () => {
  return (
    <div className='renderingElement oui' style={{backgroundColor: "floralwhite"}}>
        <div className='container'>
            <h1 style={{color:"black"}}>Page Not Found, Page Introuvable</h1>
            <div>
                <img src={Image404} className="rounded mx-auto d-block text-center " height="400" width="400" alt="..."/>
            </div>
            <div className=" mt-4 text-center ">
               <h3> <a className="text-danger "  href="/">Retour à la page d'acceuil</a></h3>
            </div>

        </div>
    </div>
  );
};

export default NotFound;
