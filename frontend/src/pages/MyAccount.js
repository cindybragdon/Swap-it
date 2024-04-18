import React from 'react';
import ImageAccount from "../images/BGMyAccount.jpg";
import ImageNoImage from "../images/userIcone.jpg"

const MyAccount = () => {

    var fullBackgroundStyle = {
        backgroundImage: `url(${ImageAccount})`,
        width: '100vw',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        fontFamily: "Reddit Mono",
        backgroundRepeat: 'no-repeat',

        padding: 0,
        margin: 0
    };

    const currentUser = JSON.parse(sessionStorage.user);
    console.log(currentUser.userImage);
    return (
        <div className="container-account" style={fullBackgroundStyle}>
            <div className="container  mb-4 d-flex justify-content-center"  >
                <div className="card p-4" style={{ backgroundColor: 'white' }} id="account-box">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary">
                            {currentUser.userImage ? <img
                                src={currentUser.userImage}
                                height="300" width="375" alt="Account"/> : <img
                                src={ImageNoImage} height="200" width="275" alt="Account"/>}

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
