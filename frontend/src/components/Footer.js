import React from 'react';

//test
const Footer = () => {
    return (
        <footer className="card text-center">
            <div className="card-header">
                © 2024 Swap-it, All rights reserved
            </div>
            <div className="card-body">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-around">
                                    <i className="bi bi-twitter-x"></i>
                                    <i className="bi bi-envelope"></i>
                                    <i className="bi bi-github"></i>
                                    <i className="bi bi-instagram"></i>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
