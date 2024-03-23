import React from 'react';

// Dans change  language, je voudrais faire un dropdown avec les langues disponibles, mais cela ne fonctionne pas.
const Footer = () => {
    return (
        <div className='footer'>
        <footer className="card text-center">
            <div className="card-header">
                © 2024 Swap-it, All rights reserved
            </div>
            <div className="card-body">
                <h5 className="card-text">Change language</h5>
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
        </div>
    );
};

export default Footer;
