import React, { useState } from 'react';
import ImageSurprise from "../images/surprise.jpg"

const QuiJaiPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageSurprise})`,
        position: 'relative',
        minHeight: '100vh',
    }

    const [openItemId, setOpenItemId] = useState(null);

    const [personnePigee, setPersonnePigee] = useState("");





    return (
        <div className='renderingElement oui' style={sectionStyle}>
            <div className='container '>
                <h3 style={{backgroundColor: "#D4015F",
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'auto',
                    textAlign: 'center',
                    }}>
                    !!! Regardez bien derrière vous pour vous assurer que personne ne regarde au dessus de votre épaule !!!
                </h3>
                <div id="accordion  "
                     style={{backgroundColor: "#D4015F",
                         position: 'absolute',
                         top: '70%',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         width: 'auto',
                         textAlign: 'center',
                     }}>
                    <div class="d-flex justify-content-center ">
                    <div className="card text-center " style={{ backgroundColor: "#bff542"}}>
                        <div className={`card-header ${openItemId === null ? '' : 'collapsed'}` } id="headingTwo"   >
                            <h5 className="mb-0 " >
                                <button
                                    className="btn btn-link no-underline"
                                    type="submit"
                                    onClick={() => openItemId === null ? setOpenItemId(1) : setOpenItemId(null)}
                                    aria-expanded={openItemId === 1}
                                    aria-controls={`collapse${1}`}
                                    style={{ fontSize: '20px' }}

                                >
                                    <i className="bi bi-arrow-right-square-fill " style={{ paddingRight: '20px'}}></i>
                                    Le secret se cache ici!
                                    <i className="bi bi-arrow-left-square-fill" style={{ paddingLeft: '20px'}}></i>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className={`collapse ${openItemId === 1 ? 'show' : ''}`} aria-labelledby="headingTwo"
                             data-parent="#accordion"
                             style={{ backgroundColor: "#42f5ef"}}>
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