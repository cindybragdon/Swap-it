import ImageWishedItemBlank from "../images/noWishedItemImage.jpg";
import React from "react";
import axios from "axios";

const WishedItem = (props) => {

    const index = props[0];
    const userPige = props[1];
    const wishedItem = props[2];
    const handleClickToDeleteItem = (wishedItem) => {
        axios.put(`http://localhost:9281/api/deleteWishedItem?idWishedItem=${wishedItem.idWishedItem}`)
            .then(window.location.reload)
            .catch(err => console.log(err));
    };

    return (
        <div className="col" key={index}>
            <div className="card card-custom mb-3">
                <div className="title-card-piges card-header bg-danger">{wishedItem.wishedItemName}</div>
                {wishedItem.wishedItemImage ?
                    <img src={wishedItem.wishedItemImage} className="card-image img-fluid p-2"/> :
                    <img src={ImageWishedItemBlank} className="card-image img-fluid p-2"/>}
                <div className="card-body">
                    <p className="card-text">{wishedItem.wishedItemDescription}</p>
                    {wishedItem.wishedItemUrl ?
                        <a href={wishedItem.wishedItemUrl} className="stretched-link new-tab"
                           target='_blank'>Voir cet item en ligne</a> : ''}

                </div>
                {userPige.user.idUser !== JSON.parse(sessionStorage.user).idUser ?
                    <div className="card-body">
                        <p className="card-text">Ajouté par
                            : {wishedItem.userWhoAddedTheItem.userFirstName}</p>

                    </div> : ''
                }
                <div>
                    <button onClick={() => handleClickToDeleteItem(wishedItem)}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}
export default WishedItem;