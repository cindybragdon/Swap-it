import React, { useEffect, useState } from 'react';
import ImageCadeau from '../images/newWishItem.jpg';
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css';
import BackToTopButton from "../components/BackToTopButton";
import ImageAdItem from "../images/Listes.jpg";

const MyWishList = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageAdItem})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }
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

    const handleClick = () => {
        navigate('/pige/myWishList/addWish', { state: userPige });
    };

    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100' style={sectionStyle}>
            <div>
                <div className="pt-3">
                    <h2 className="bg-danger p-2 w-75 ">{userPige.user.userFirstName}, voici votre liste de
                        suggestions de cadeaux pour la pige {userPige.pige.pigeName}</h2>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col pb-5">
                        <div className="card h-100" onClick={handleClick}>
                            <img src={ImageCadeau} className="card-img-top-my-wish-list img-fluid" alt="..."
                                 width="100"/>
                            <div className="card-body">
                                <h5 className="card-title">Ajouter une suggestion</h5>
                                <p className="card-text"><i className="bi bi-plus-lg"></i></p>
                            </div>
                        </div>
                    </div>
                    {listWishedItems.map((wishedItem, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 mb-3">
                                <img src={wishedItem.wishedItemName} className="card-img-top-my-wish-list img-fluid"
                                     alt="..." width="100"/>
                                <div className="card-body">
                                    <h5 className="card-title">{wishedItem.wishedItemName}</h5>
                                    <p className="card-text">{wishedItem.wishedItemDescription}</p>
                                    <a href={wishedItem.wishedItemUrl} className="stretched-link new-tab"
                                       target='_blank'>Voir cet item en ligne</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div>
                <BackToTopButton/>
            </div>
        </div>
    );
};

export default MyWishList;
