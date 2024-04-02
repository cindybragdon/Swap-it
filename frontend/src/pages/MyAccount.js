import React from 'react';
import ImageAccount from "../images/MyAccount.jpg";

const MyAccount = () => {


    return (
        <div className="renderingElement oui" style={{ backgroundColor: '#009BC1' }}>
            <div className="container  mb-4 p-3 d-flex justify-content-center" >
                <div className="card p-4" style={{ backgroundColor: '#FFFCD7' }}>
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary">
                            <img src={ImageAccount} height="300" width="375" alt="Account"/>
                        </button>
                        <p className="name mt-3">PRENOM : user.getPrenom *** NOM : user.getNom </p>

                        <div className="text mt-3">

                            <p>TELEPHONE : user.getTelephone</p>
                        </div>
                        <div className="text mt-3">

                            <p>EMAIL : user.getEmail</p>
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
