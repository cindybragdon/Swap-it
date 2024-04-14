import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ImageAddWish from "../images/Thinking.jpg";
import axios from "axios";




const AddWish = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageAddWish})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: '100vw'
    }




    const selectedUserPige = JSON.parse(sessionStorage.userPigeToAddItem);
    const [wishedItemName, setWishedItemName] = useState('');
    const [wishedItemDescription, setItemDescription] = useState('');
    const [wishedItemUrl, setItemUrl] = useState('');
    const [wishedItemImage, setWishedItemImage] = useState('');

    const formsWishedItem = {
        userPige : selectedUserPige,
        wishedItemName: wishedItemName,
        wishedItemDescription: wishedItemDescription,
        wishedItemUrl: wishedItemUrl,
        wishedItemImage :wishedItemImage,
        userWhoAddedTheItem: JSON.parse(sessionStorage.user)
    }



    const OnSubmit = () => {

        const url = `http://localhost:9281/api/createWishedItem?idUser=${JSON.parse(sessionStorage.user).idUser}`;
        console.log(selectedUserPige);
        axios.post(url, formsWishedItem)
            .then(res => {if(res.data === "ACK-900") {
                alert(`L'objet ${wishedItemName} a bien été ajouté!`) ;
            } else {
                alert(`Erreur : L'objet ${wishedItemName} n'a pas été ajouté.`)
            }})
            .catch(err => console.log(err));

    }

    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100 ' style={sectionStyle}>
            <div className="col-sm-5">
                <div className="card p-2 mt-5 border border-black" style={{backgroundColor: '#88CFED'}}>
                    <div className="card-header " style={{backgroundColor: '#012C57'}}>
                        <h3 className= "text header " style={{color: 'white'}} >Ajouter une suggestion</h3>
                    </div>
                    <form className='container' onSubmit={OnSubmit}>


                        <div className="mb-2">
                            <div>
                                <label>Nom Item</label>
                            </div>
                            <input type="nom" id="typeNom" className="col-sm-6" placeholder={"Nom Item"}
                                   onChange={event => setWishedItemName(event.target.value)} required/>
                        </div>
                        <div className="mb-2">
                            <div>
                                <label>Description</label>
                            </div>
                            <textarea rows="3" placeholder={"Entrez la description ici"} className="col-sm-6"
                                      onChange={event => setItemDescription(event.target.value)} required/>
                        </div>

                        <div className="mb-2">
                            <div>
                                <label>Image</label>
                            </div>
                            <textarea rows="3" placeholder={"Entrez un URL pour l'image ici"} className="col-sm-6"
                                      onChange={event => setWishedItemImage(event.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <div>
                                <label>Voir cet item en ligne au : </label>
                            </div>
                            <input type="nom" placeholder={"Entrez un url ici"} className="col-sm-6"
                                   onChange={event => setItemUrl(event.target.value)}/>
                        </div>

                        <br/>
                        <button type="submit" className="btn "
                                style={{backgroundColor: '#012C57', color: 'white'}}>Ajouter à la liste
                        </button>
                    </form>
                </div>
            </div>

        </div>


    );
};

export default AddWish;
