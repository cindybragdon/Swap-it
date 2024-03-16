import React, { useState } from 'react';

const QuiJaiPige = () => {

    const [openItemId, setOpenItemId] = useState(null);

    // Je ne crois pas que c'est un useState qu'il faut ici.... à suivre voir ligne 36
    const [personnePigee, setPersonnePigee] = useState("");





    return (
        <div className='hero oui'>
            <div className='container '>
                <p>
                    !!! Regardez bien derrière vous pour vous assurer que personne ne regarde au dessus de votre épaule !!!
                </p>
                <div id="accordion">
                    <div class="d-flex justify-content-center">
                    <div className="card text-center ">
                        <div className={`card-header ${openItemId === null ? '' : 'collapsed'}` } id="headingTwo"   >
                            <h5 className="mb-0 ">
                                <button
                                        className="btn btn-link "
                                        type="submit"
                                        onClick={() => openItemId === null ? setOpenItemId(1) : setOpenItemId(null)}
                                        aria-expanded={openItemId === 1}
                                        aria-controls={`collapse${1}`}
                                >
                                    Roulement de tambour...
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className={`collapse ${openItemId === 1 ? 'show' : ''}`} aria-labelledby="headingTwo"
                             data-parent="#accordion">
                            <div className="card-body">
                                //{personnePigee}
                                Snoop Dogg
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


    );
};

export default QuiJaiPige;