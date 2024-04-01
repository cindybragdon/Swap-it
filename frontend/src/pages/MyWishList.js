import React, {useEffect, useState} from 'react'
import ImageSouliers from '../images/nike.jpg';
import ImageRobe from '../images/simons.jpg';
import ImageVernis from '../images/vernis.jpg';
import ImageCadeau from '../images/gift.png';
import {useLocation, useNavigate} from "react-router-dom";
import '../App.css';
import BackToTopButton from "../components/BackToTopButton";

//Les cartes passent sous la navbar et sur le footer dès quil y en a plus de 4
// CETTE PAGE CONTIENT DES DONNEES HARDCODEES QUI DOIVENT ETRE REMPLACEES
// Il doit y avoir autant de carte que de suggestions, PLUS une carte qui permet dajouter une suggestion supplementaire
// L'usager ne doit voir que les suggestions qu'il aura placé LUI-MÊME

const MyWishList = () => {



    const navigate = useNavigate();

    const location = useLocation();
    const userPige = location.state;
    console.log(userPige);


    const [listWishedItems, setListWishedItems] = useState([])

    //Olivier :
    //https://designcode.io/react-hooks-handbook-fetch-data-from-an-api

    useEffect(() => {
        const url = `http://localhost:9281/api/getAllWishedItemsFromUserPige?idUserPige=${userPige.idUserPige}`;

        const fecthData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setListWishedItems(data);

            } catch (error) {
                console.log("error", error);
            }
        }
        fecthData();
    }, []);


    const handleClick = () => {
        navigate('/pige/myWishList/addWish', {state:userPige});
        //alert('Button clicked');
        console.log('Button clicked')
    }

    return (
        <div className='container row bg-primary text-center'>
            <div >
                <div className="pt-3">
                <h2>{userPige.user.userFirstName}, voici votre liste de suggestions de cadeaux pour la pige {userPige.pige.pigeName} </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">


                    {listWishedItems.map(wishedItem =>

                        <div className="container row">
                            {console.log(wishedItem)}
                            <div className="card h-500 mt-5 mb-5">
                                <img src={wishedItem.wishedItemName} className="card-img-top-my-wish-list " alt="..."
                                     height="300"
                                     width="100"/>
                                <div className="card-body">
                                    <h5 className="card-title">{wishedItem.wishedItemName}</h5>
                                    <p className="card-text">{wishedItem.wishedItemDescription}</p>
                                    <a href={wishedItem.wishedItemUrl} className="stretched-link new-tab "
                                       target='_blank'>Voir cet item en ligne</a>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col pb-5">
                        <div className="card h-100">
                            <img src={ImageCadeau} className="card-img-top-my-wish-list" alt="..."/>
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

