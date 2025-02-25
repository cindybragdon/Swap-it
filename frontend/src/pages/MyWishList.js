import React, {useEffect, useState} from 'react';
import ImageCadeau from '../images/newWishItem.jpg';
import ImageAdItem from "../images/Listes.jpg";
import ImageWishedItemBlank from "../images/noWishedItemImage.jpg";
import {useLocation, useNavigate} from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import axios from "axios";

const MyWishList = () => {
    var fullBackgroundStyle = {
        backgroundImage: `url(${ImageAdItem})`,
        width: '100vw',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: "Reddit Mono",
        padding: 0,
        margin: 0
    };

    const navigate = useNavigate();
    const location = useLocation();
    const userPige = location.state;
    const [listWishedItems, setListWishedItems] = useState([]);

    useEffect(() => {
        const url = `http://localhost:9281/api/getAllWishedItemsFromUserPige?idUserPige=${userPige.idUserPige}`;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setListWishedItems(data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const handleClickToAddItem = () => {
        sessionStorage.setItem('userPigeToAddItem', JSON.stringify(userPige));
        navigate('/pige/myWishList/addWish');
    };

    const handleClickBackToPige = () => {
        navigate(`/piges/${userPige.pige.pigeName}`, {state: userPige});
    };

    const handleDeleteWishItem = (wishedItem, index) => {
        listWishedItems.splice(index, 1);
        setListWishedItems(listWishedItems);
        axios.put(`http://localhost:9281/api/deleteWishedItem?idWishedItem=${wishedItem.idWishedItem}`)
            .catch(err => console.log(err));
        window.location.reload();
    }
    return (
        <div style={fullBackgroundStyle}>
            <div className='container-fluid text-center'>
                <div className="pt-3 ">
                    <h2 className="title-piges" style={{color: '#FF3991'}}>Voici
                        liste de suggestions de cadeaux de {userPige.user.userFirstName} pour la pige {userPige.pige.pigeName}
                        <h5><a className="link-opacity-75" onClick={handleClickBackToPige}>Retour à la pige</a></h5>
                    </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className="col pb-5">
                        <div className="card card-custom" onClick={handleClickToAddItem}>
                            <img src={ImageCadeau} className="card-image img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title">Ajouter une suggestion</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                        </div>
                    </div>
                    {listWishedItems.map((wishedItem, index) => (
                        userPige.user.idUser === JSON.parse(sessionStorage.user).idUser ?
                            !wishedItem.deleted ?
                                wishedItem.userWhoAddedTheItem.idUser === wishedItem.userPige.user.idUser ?
                                    <div className="col mb-4" key={index}>
                                        <div className="card card-custom shadow-sm">
                                            <div id="piges-box"
                                                 className="title-card-piges card-header bg-danger">{wishedItem.wishedItemName}</div>
                                            {wishedItem.wishedItemImage ?
                                                <img src={wishedItem.wishedItemImage}
                                                     className="card-image img-fluid p-2"/> :
                                                <img src={ImageWishedItemBlank} className="card-image img-fluid p-2"/>
                                            }
                                            <div className="card-body">
                                                <p className="card-text">{wishedItem.wishedItemDescription}</p>
                                                {wishedItem.wishedItemUrl ?
                                                    <a href={wishedItem.wishedItemUrl}
                                                       target='_blank'>Voir cet item en ligne</a> : ''}
                                            </div>


                                            <div className="container position-relative">
                                                <button type="button" className="btn  position-absolute bottom-0 end-0"
                                                        onClick={() => handleDeleteWishItem(wishedItem, index)}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div> : null
                                : null :
                            !wishedItem.deleted ?
                                <div className="col mb-4"
                                     key={index}>
                                    <div className="card card-custom shadow-sm">
                                        <div id="piges-box"
                                             className="title-card-piges card-header bg-danger">{wishedItem.wishedItemName}</div>
                                        {wishedItem.wishedItemImage ?
                                            <img src={wishedItem.wishedItemImage}
                                                 className="card-image img-fluid p-2"/> :
                                            <img src={ImageWishedItemBlank} className="card-image img-fluid p-2"/>
                                        }
                                        <div className="card-body">
                                            <p className="card-text">{wishedItem.wishedItemDescription}</p>
                                            {wishedItem.wishedItemUrl ?
                                                <a href={wishedItem.wishedItemUrl}
                                                   target='_blank'>Voir cet item en ligne</a> : ''}
                                        </div>


                                        {userPige.user.idUser !== JSON.parse(sessionStorage.user).idUser ?
                                            <div className="card-body">
                                                <p className="card-text">Ajouté par
                                                    : {wishedItem.userWhoAddedTheItem.userFirstName}</p>
                                            </div> : ''}
                                        <div className="container position-relative">
                                            <button type="button" className="btn  position-absolute bottom-0 end-0"
                                                    onClick={() => handleDeleteWishItem(wishedItem, index)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div> : null

                    ))}

                </div>
            </div>

            <BackToTopButton/>
        </div>
    )
        ;
}
export default MyWishList;
