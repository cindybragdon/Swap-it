import React from 'react';
import Login from "../components/Login";
import ImageLogo2 from "../images/Logo2.jpg";
import ImageParty from "../images/Party7.jpg";
import {useLocation, useNavigate} from "react-router-dom";

function Home() {

    var sectionStyle = {
        backgroundImage: `url(${ImageParty})`,
        position: 'relative',
        minHeight: '100vh',
    }

    const navigate = useNavigate();

    const location = useLocation();
    const userPige = location.state;

    const idUser = 0;

    return (
        <div style={sectionStyle}>
            <div className='container'>
                <div className="row align-items-center pt-5">
                    <div className='col-md-5'>
                        <img src={ImageLogo2} className="rounded mx-auto d-block img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card " style={{backgroundColor: 'rebeccapurple'}}>
                            <div className="card-body">

                                <h3 className="text-white">Bienvenue sur Swap-it!</h3>

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
