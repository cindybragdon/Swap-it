import React from 'react';


const Footer = () => {
    return (

            <footer className="footer">

                <section className="style={{ backgroundColor: 'light purple' }} py-2 py-xl-3 border-top border-light">
                    <div className="container overflow-hidden">
                        <div className="row gy-5 gy-md-0">
                            <div className="col-xs-12 col-md-7 order-1 order-md-0">
                                <div className="copyright text-center text-md-start">
                                    &copy; 2024. Swap-it, all Rights Reserved.
                                </div>
                                <div className="credits text-white text-center text-md-start mt-2 fs-7">
                                    Built by <a href="/about"
                                                className="link-danger text-decoration-none">ScrumShine</a> with <i className="bi bi-heart text-danger"></i>
                                </div>
                            </div>

                            <div className="col-xs-12 col-md-5 order-0 order-md-1">
                                <ul className="nav justify-content-center justify-content-md-end">
                                    <li className="nav-item">
                                        <a className="nav-link link-dark" href="#!">
                                            <i className="bi bi-facebook text-primary "></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-dark" href="#!">
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-dark" href="#!">
                                            <i className="bi bi-instagram text-info"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </footer>

    );
};

export default Footer;
