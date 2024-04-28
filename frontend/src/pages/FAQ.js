import React, {useState} from 'react';
import questionsAnswers from "../Data/QuestionsAnswers";
import BackToTopButton from "../components/BackToTopButton";
import ImageFAQ from "../images/FAQBG.jpg";
import ImageWebAdresse from "../images/webAdresse.jpg";
import ImageURLboutique from "../images/URLboutique.jpg";
import ImageAd1 from "../images/adresseImage2.jpg";
import ImageAd2 from "../images/adresseImage.jpg";
import ImageAd3 from "../images/URLimage.jpg";

const FAQ = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageFAQ})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px',
        minHeight: '85vh'
    }

    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (itemId) => {
        if (openItemId === itemId) {
            setOpenItemId(null); // Close the item if it is already open
        } else {
            setOpenItemId(itemId); // Open the item and close others
        }
    };


    return (
        <div className='card  text-center p-3' style={sectionStyle}>
            <div className="card p-2 w-50" style={{backgroundColor: "white"}} id="container-faq">
                <div className='d-block align-middle'>
                    <h2 id="faqText" className=" p-2" style={{backgroundColor: "darkgrey"}}>Parce que parfois, tout
                        comprendre seul, c'est pas un cadeau!</h2>
                    <div className="accordion" id="accordionExample">

                        <div className="card">
                            <div className="card-header" id="headingOne" style={{backgroundColor: "darkgrey"}}>
                                <h2 className="mb-0">
                                    <button
                                        id="link-text"
                                        className="btn btn-link text-dark"
                                        type="button"
                                        onClick={() => toggleItem(1)}
                                        aria-expanded={openItemId === 1}
                                        aria-controls="collapseOne">
                                        <i className="bi bi-patch-question-fill "></i> Comment insérer l'URL D'UN
                                        ARTICLE D'UNE BOUTIQUE EN LIGNE(lien internet) <i
                                        className="bi bi-patch-question-fill"></i>

                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne"
                                 className={`collapse ${openItemId === 1 ? 'show' : ''}`}
                                 aria-labelledby="headingOne"
                                 style={{backgroundColor: "lightgrey"}}>
                                <div className="card-body">
                                    Pour insérer l'URL d'un site web afin que les autres participants puissent voir
                                    vos items en ligne,
                                    voici ce que vous devez faire :
                                    <br></br>
                                    <i className="bi bi-1-circle"></i> Rendez-vous sur la page web de votre article
                                    <br></br>
                                    <i className="bi bi-2-circle"></i> Dans la barre de navigation tout en haut,
                                    cliquez droit, puis choisir "copier"
                                    <br></br>
                                    <img src={ImageWebAdresse} alt="Descriptive Text"/>
                                    <i className="bi bi-3-circle"></i> Retournez dans votre "Ajouter une
                                    suggestion", cliquez droit, puis choisir "coller"
                                    <br></br>
                                    <img src={ImageURLboutique} alt="Descriptive Text"/>
                                </div>
                            </div>

                        </div>


                        <div className="card">
                            <div className="card-header" id="headingOne" style={{backgroundColor: "darkgrey"}}>
                                <h2 className="mb-0">
                                    <button
                                        id="link-text"
                                        className="btn btn-link text-dark"
                                        type="button"
                                        onClick={() => toggleItem(1)}
                                        aria-expanded={openItemId === 1}
                                        aria-controls="collapseOne">
                                        <i className="bi bi-patch-question-fill "></i> Comment insérer l'URL D'UNE
                                        IMAGE pour votre "Liste de souhaits" ou votre "Pseudo Pige" <i
                                        className="bi bi-patch-question-fill"></i>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne"
                                 className={`collapse ${openItemId === 1 ? 'show' : ''}`}
                                 aria-labelledby="headingOne"
                                 style={{backgroundColor: "lightgrey"}}>
                                <div className="card-body">
                                    Pour insérer l'URL d'une image pour illustrer vos souhaits ou vous donner un air
                                    comique dans une pige,
                                    voici ce que vous devez faire :
                                    <br></br>
                                    <i className="bi bi-1-circle"></i> Rendez-vous sur la page web de votre article
                                    <br></br>
                                    <i className="bi bi-2-circle"></i> Cliquez droit sur la photo, puis choisissez
                                    "copier L'ADRESSE DE L'IMAGE"
                                    <br></br>
                                    <img src={ImageAd1} alt="Descriptive Text"/>
                                    <i className="bi bi-3-circle"></i> Retournez dans votre "Ajouter une
                                    suggestion", cliquez droit, puis choisir "coller".
                                    <br></br>
                                    <img src={ImageAd3} alt="Descriptive Text"/>
                                    <br></br>
                                    Même processus pour le Pseudo Pige!
                                    <img src={ImageAd2} alt="Descriptive Text"/>

                                </div>
                            </div>

                        </div>

                        {questionsAnswers.map((questionAns) => (
                            <div className="card " key={questionAns.itemId}>
                                <div className={`card-header  ${questionAns.itemId === openItemId ? '' : 'collapsed'}`}
                                     id={`heading${questionAns.itemId}`} style={{backgroundColor: "darkgrey"}}>
                                    <h2 className="mb-0">
                                        <button
                                            id="link-text"
                                            className="btn btn-link text-dark"
                                            type="button"
                                            onClick={() => toggleItem(questionAns.itemId)}
                                            aria-expanded={openItemId === questionAns.itemId}
                                            aria-controls={`collapse${questionAns.itemId}`}>
                                            {`Question ${questionAns.itemId} : ${questionAns.question}`}
                                        </button>
                                    </h2>
                                </div>

                                <div id={`collapse${questionAns.itemId}`}
                                     className={`collapse ${openItemId === questionAns.itemId ? 'show' : ''}`}
                                     aria-labelledby={`heading${questionAns.itemId}`}
                                     style={{backgroundColor: "lightgrey"}}>
                                    <div className="card-body">
                                        {questionAns.answer}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <BackToTopButton/>
                </div>
            </div>
        </div>

    );
};

export default FAQ;
