import React from 'react';
import Login from "../components/Login";
import ImageLogo2 from "../images/homeIcone.jpg";
import ImageParty from "../images/newHomeBG.jpg";


function Home() {

    var sectionStyle = {
        backgroundImage: `url(${ImageParty})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '85vh',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px'
    }


    return (
        <div style={sectionStyle}>
            <div className='container'>
                <div className="row align-items-center pt-5">
                    <div className='col-md-5'>
                        <img src={ImageLogo2} className="rounded mx-auto d-block img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card " style={{backgroundColor: '#0761D1'}}>
                            <div className="card-body ">
                                <div className="card-text ">
                                    <h3 className="text-white m-2" id="welcomeText">Bienvenue sur Swap-<span
                                        className="welcome-span">i</span>t!</h3>
                                    <h6 className="text-white m-2" id="connectText">✨ Connectez vous ✨</h6>

                                </div>
                                <Login/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
