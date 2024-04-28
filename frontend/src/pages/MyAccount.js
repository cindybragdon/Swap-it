import React from 'react';
import ImageAccount from "../images/BGMyAccount.jpg";
import ImageNoImage from "../images/manProfile.jpg";
import ImageNo1 from "../images/woman1.jpg";
import ImageNo2 from "../images/woman2.jpg";
import ImageNo3 from "../images/man1.jpg";

const MyAccount = () => {

    var fullBackgroundStyle = {
        backgroundImage: `url(${ImageAccount})`,
        width: '100vw',
        minHeight: '85vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        fontFamily: "Reddit Mono",
        backgroundRepeat: 'no-repeat',
        border: 'white solid 3px',
        padding: 0,
        margin: 0
    };

    const currentUser = JSON.parse(sessionStorage.user);
    console.log(currentUser.userImage);
    return (
        <div className="container-account" style={fullBackgroundStyle}>

            <div className="container  mb-4 d-flex justify-content-center mt-3">
                <div id="account-box-img" style={{backgroundColor: 'white'}}>
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <img id="img-acc" src={ImageNo1} alt="" width='180' height='180'/>
                        <img id="img-acc" src={ImageNo2} alt="" width='180' height='180'/>
                        <img id="img-acc" src={ImageNo3} alt="" width='180' height='180'/>
                    </div>
                </div>
                <div className=" p-4" style={{backgroundColor: 'white'}} id="account-box">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button id="pic-account" className="btn">
                            {currentUser.userImage ? <img
                                src={currentUser.userImage}
                                height="250" width="250" alt="Account"/> : <img
                                src={ImageNoImage} height="250" width="250" alt="Account"/>}

                        </button>
                        <p className="name mt-3" style={{color: 'black'}}>
                            PRENOM : {currentUser.userFirstName}  </p>
                        <p className="name mt-3" style={{color: 'black'}}>
                            NOM : {currentUser.userLastName}
                        </p>

                        <div className="text mt-3" style={{color: 'black'}}>
                            <p>TELEPHONE : {currentUser.userPhone}</p>
                        </div>
                        <div className="text mt-3" style={{color: 'black'}}>
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
