import React from 'react'
import {useForm} from 'react-hook-form';
import ImageSouliers from '../images/nike.jpg';
import ImageRobe from '../images/simons.jpg';
import ImageVernis from '../images/vernis.jpg';
import ImageCadeau from '../images/gift.png';
import {useNavigate} from "react-router-dom";
import '../MyWishList.css';
import BackToTopButton from "../components/BackToTopButton";

//Les cartes passent sous la navbar et sur le footer dès quil y en a plus de 4
// CETTE PAGE CONTIENT DES DONNEES HARDCODEES QUI DOIVENT ETRE REMPLACEES
// Il doit y avoir autant de carte que de suggestions, PLUS une carte qui permet dajouter une suggestion supplementaire
// L'usager ne doit voir que les suggestions qu'il aura placé LUI-MÊME

const MyWishList = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pige/myWishList/addWish');
        //alert('Button clicked');
        console.log('Button clicked')
    }

    return (
        <div className='renderingElement oui'>
            <div className="container">
                <p> getUserName, voici votre liste de suggestions de cadeaux pour la pige getPigeName </p>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-500">
                            <img src={ImageSouliers} className="card-img-top " alt="..." height="300" width="100"/>
                            <div className="card-body">
                                <h5 className="card-title">Souliers Nike</h5>
                                <p className="card-text">J'aimerais avoir ces souliers grandeur 7.5 Mais je crois que ça
                                    dépasse le budjet de la pige.</p>
                                <a href="https://www.nike.com/ca/fr/u/custom-nike-blazer-mid-77-by-you-10001251/1709858248900"
                                   className="stretched-link new-tab " target='_blank'>Voir cet item en ligne</a>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={ImageRobe} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Robe Simons</h5>
                                <p className="card-text">Cette robe est très jolie.</p>
                                <a href="https://www.simons.ca/fr/vetements-femme/robes/longues/la-longue-robe-col-bateau-dentelle-extensible--11318-216810?catId=7076&colourId=11"
                                   className="stretched-link new-tab" target='_blank'>Voir cet item en ligne</a>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={ImageVernis} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Vernis a ongles</h5>
                                <p className="card-text">Délicieuse couleur parfaite pour le printemps.</p>
                                <a href="https://www.sallyhansen.com/en-us/nail-color/nail-color/pure?shade=peony-origins"
                                   className="stretched-link new-tab" target='_blank'>Voir cet item en ligne</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={ImageCadeau} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div className="card" onClick={handleClick}>
                                    <div className="card-body">
                                        <h5 className="card-title">Ajouter une suggestion</h5>
                                        <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div>
                <BackToTopButton/>
            </div>

        </div>

    );
};

export default MyWishList;

