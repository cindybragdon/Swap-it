import React from 'react';
import ImageAccount from "../images/Profil.jpg";

const MyAccount = () => {

    const currentUser = JSON.parse(sessionStorage.user);
    console.log(currentUser.userImage);
    return (
        <div className="container-account" style={{ backgroundColor: '#009BC1' }}>
            <div className="container  mb-4 p-3 d-flex justify-content-center" >
                <div className="card p-4" style={{ backgroundColor: '#FFFCD7' }}>
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary">
                            {currentUser.userImage ? <img
                                src='https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg'
                                height="300" width="375" alt="Account"/> : <img
                                src={ImageAccount} height="300" width="375" alt="Account"/>}

                        </button>
                        <p className="name mt-3">PRENOM : {currentUser.userFirstName} NOM : {currentUser.userLastName} </p>

                        <div className="text mt-3">
                            <p>TELEPHONE : {currentUser.userPhone}</p>
                        </div>
                        <div className="text mt-3">
                            <p>EMAIL : {currentUser.userEmail}</p>
                        </div>

                        <div className="button-container gap-2 d-md-flex justify-content-md-start">
                            <a href='/myaccount/updateaccount'>
                                <button type="submit" className="btn btn-info w-30">Modifier mon compte</button>
                            </a>
                            <a href='/piges'>
                                <button type="submit" className="btn btn-info w-30">Voir mes piges</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
};

export default MyAccount;
