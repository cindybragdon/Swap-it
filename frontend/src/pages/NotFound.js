import React from 'react';
import Image404 from "../images/NotFound404.jpg";


const NotFound = () => {
    return (
        <div className=' justify-content-center'
             style={{backgroundColor: "whitesmoke", fontFamily: "Reddit Mono", minHeight: "85vh"}}>
            <div className='text-center mt-2 '>
                <h1 style={{color: "black"}}>Page Not Found, Page Introuvable</h1>
                <div>
                    <img src={Image404} className="rounded mx-auto d-block text-center " height="400" width="400"
                         alt="..."/>
                </div>
                <div className=" mt-4 text-center ">
                    <h3><a id="link-text" className="text-danger " href="/">➡️ Retour à la page d'accueil ⬅️</a></h3>
                </div>

            </div>
        </div>
    );
};

export default NotFound;
