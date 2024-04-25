import React, {useEffect, useState} from 'react';
import ImageSurprise from "../images/surprise.jpg"
import {useLocation} from "react-router-dom";
import axios from "axios";

const QuiJaiPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageSurprise})`,
        position: 'relative',
        minHeight: '85vh',
        fontFamily: "Reddit Mono"
    }

    const location = useLocation();
    const personPicked = location.state;

    const [openItemId, setOpenItemId] = useState(null);


    console.log(personPicked)



    return (
        <div className='renderingElement' style={sectionStyle}>
            <div className='container '>
                <h3 id="secret-picked" style={{backgroundColor: "#316B7E",
                    position: 'absolute',
                    top: '50%',
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
                         top: '80%',
                         left: '50%',
                         transform: 'translateX(-50%)',
                         width: 'auto',
                         textAlign: 'center',
                     }}>
                    <div className="d-flex justify-content-center ">
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
                                {personPicked.userPigeWhoIsPickedByTheUserPige.user.userFirstName} {personPicked.userPigeWhoIsPickedByTheUserPige.user.userLastName} ({personPicked.userPigeWhoIsPickedByTheUserPige.userPigePseudo})
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