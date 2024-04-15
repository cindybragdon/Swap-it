import React, { useEffect, useState } from 'react';
import ImageCadeau from '../images/newWishItem.jpg';
import ImageAdItem from "../images/Listes.jpg";
import ImageWishedItemBlank from "../images/noWishedItemImage.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import axios from "axios";
import WishedItem from "../components/WishedItem";

const MyWishList = () => {
    var fullBackgroundStyle = {
        backgroundImage: `url(${ImageAdItem})`,
        width: '100vw',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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




    return (
        <div style={fullBackgroundStyle}>
            <div className='container-fluid text-center'>
                <div className="pt-3">
                    <h2 className="title-piges" style={{color: '#FF3991'}}>{userPige.user.userFirstName}, voici votre
                        liste de suggestions de cadeaux pour la pige {userPige.pige.pigeName}<h5><a
                            className="link-opacity-75" onClick={handleClickBackToPige}>Retour à la pige</a></h5></h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
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

                        userPige.user.idUser !== JSON.parse(sessionStorage.user).idUser ?
                            <WishedItem index={index} userPige={userPige} wishedItem={wishedItem} /> : <p></p>
                    ))}
                </div>
                <BackToTopButton/>
            </div>
        </div>
    );
}
export default MyWishList;
