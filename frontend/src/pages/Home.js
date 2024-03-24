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
                </div>
                <div className="col-sm-6">
                    <div className="card ">
                        <div className="card-body">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div> {/* This closes the 'container' div */}
        </div> /* This closes the 'renderingElement oui' div */
    );
}

export default Home;
