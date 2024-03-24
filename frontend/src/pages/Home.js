import React from 'react';
import Login from "../components/Login";
import ImageLogo2 from "../images/Logo2.jpg";

function Home() {
    return (
        <div className='renderingElement oui'>
            <div className='container'>
                <div className="row align-items-center pt-5">
                    <div className='col-md-4'>
                        <img src={ImageLogo2} className="rounded mx-auto d-block img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card ">
                            <div className="card-body">
                                <p>Bienvenue sur Swap-it!</p>
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
