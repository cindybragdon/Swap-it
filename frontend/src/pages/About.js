import React from 'react';
import ImageScrumShine from "../images/CinJenOli.jpg";
import ReseauxSociaux from "../components/ReseauxSociaux";
import ImageAbout from "../images/AboutUs.jpg";


const About = () => {
    var sectionStyle = {
        backgroundImage: `url(${ImageAbout})`
    }


    return (
        <div style={sectionStyle} >
            <div className="container row min-vh-100 text-center">
                <div className="container row align-items-center">

                    <div className="col-sm-6 p-4">
                        <img src={ImageScrumShine} className="rounded mx-auto d-block img-thumbnail " alt="..."/>
                    </div>

                    <div className="col-sm-6 text-black pb-3 "  style={{backgroundColor: 'antiquewhite'}}>
                        <h2>À propos de Swap-it</h2>
                        <p className="fs-6">Imaginez un monde où la pige de cadeaux n'est plus un casse-tête logistique, mais une
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
                                <br/>
                                <ReseauxSociaux userName='Olivier Poirier' gitHubUsername='olivierpoirier' linkedinUsername='olivier-poirier-66a3782bb' />
                                <br/>
                                <ReseauxSociaux userName='Cindy Bragdon' gitHubUsername='cindybragdon' linkedinUsername='cindy-bragdon-873a8822a' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
