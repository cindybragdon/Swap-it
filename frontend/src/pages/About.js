import React from 'react';
import ImageScrumShine from "../images/ScrumShine3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <div className='hero oui'>
            <div className="container text-center">
                <div className="row align-items-center pt-5">
                    <div className='col-sm-4'>
                        <img src={ImageScrumShine} className="rounded mx-auto d-block img-thumbnail" alt="..."/>
                    </div>
                    <div className="col-sm-8 ">
                        {/* Zone de texte à droite de l'image */}
                        <div className="text-about p-3"  style={{backgroundColor: '#0B5A6F '}}>
                            <h2>À propos de Swap-it</h2>
                            <p class="fs-6">Imaginez un monde où la pige de cadeaux n'est plus un casse-tête logistique, mais une
                                joyeuse célébration de l'incertitude et de l'amitié (ou de l'obligation professionnelle,
                                soyons honnêtes).Et pour ceux qui redoutent le moment où leur nom sera associé à la
                                personne la plus difficile à satisfaire du groupe, ne vous inquiétez pas! Swap-it dispose
                                de listes de suggestions et d'une messagerie discrète vous permettant de consulter la
                                communauté pour des idées cadeaux. C'est comme demander conseil à l'univers, sauf que
                                l'univers est composé d'autres utilisateurs tout aussi désespérés que vous!</p>
                            <p>Swap-it, codé par des étudiants de deuxième année du DEC en techniques de l'informatique,
                                dans le cadre du cours "Projet - Développement d'une application
                                web", enseigné par monsieur Réda Hamza.</p>

                            <p>Cégep Marie-Victorin, Montréal.</p>

                            <p>Voici une brève introduction de notre équipe ScrumShine:</p>
                            <div className="row">
                                <div className="col">
                                    Olivier Poirier
                                    <br/>
                                    <a href="https://github.com/olivierpoirier" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black'}}/>
                                    </a>
                                    <a href="https://github.com/olivierpoirier" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color: 'navy'}}/>
                                    </a>
                                </div>
                                <div className="col">
                                    Cindy Bragdon
                                    <br/>
                                    <a href="https://github.com/cindybragdon" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black'}}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/cindy-bragdon-873a8822a/" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color: 'navy'}}/>
                                    </a>
                                </div>
                                <div className="col">
                                    Karolann Mauger
                                    <br/>
                                    <a href="https://github.com/KarolannMauger" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black'}}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/karolann-mauger-777a082a4/" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{color: 'navy'}}/>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
