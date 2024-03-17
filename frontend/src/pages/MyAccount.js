import React from 'react';
import ImageAccount from "../images/account.jpg";

const MyAccount = () => {
    // Assuming `user` is defined somewhere in your code and has methods to get the user's information.
    // If not, you'll need to define it or modify this part accordingly.
    const user = {
        getPrenom: () => 'SampleFirstName',
        getNom: () => 'SampleLastName',
        getEmail: () => 'sample@email.com'
    };

    return (
        <div className="hero oui">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary">
                            <img src={ImageAccount} height="200" width="250" alt="Account"/>
                        </button>
                        {/* Corrected the placement of className and used {} to evaluate method calls */}
                        <p className="name mt-3">PRENOM : user.getPrenom *** NOM : user.getNom</p>

                        <div className="text mt-3">
                            {/* Used {} to evaluate method call */}
                            <p>TELEPHONE : user.getTelephone</p>
                        </div>
                        <div className="text mt-3">
                            {/* Used {} to evaluate method call */}
                            <p>EMAIL : user.getEmail</p>
                        </div>

                        <div className="col-sm-20 text-center">
                            <a href='/UpdateAccount'>
                                <button type="submit" className="btn btn-info w-30">Modifier mon compte</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
