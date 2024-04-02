import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from "react-router-dom";
import http from "../http/http";


//IMAGE A AJOUTER
//Arranger le input URL

const AddWish = () => {



    const location = useLocation();

    const [selectedUserPige, setSelectedUserPige] = useState(location.state);
    const [wishedItemName, setWishedItemName] = useState('');
    const [wishedItemDescription, setItemDescription] = useState('');
    const [wishedItemUrl, setItemUrl] = useState('');
    const [wishedItemImage, setWishedItemImage] = useState('');

    const msgErrors = {

        wishedItemName: {
            requis: "Vous devez saisir un nom"
        },
        wishedItemDescription: {
            requis: "Vous devez saisir une description"
        },

    }
    const formsWishedItem = {
        userPige : selectedUserPige,
        wishedItemName: wishedItemName,
        wishedItemDescription: wishedItemDescription,
        wishedItemUrl: wishedItemUrl,
        wishedItemImage :wishedItemImage
    }

    const addWishedItemPost = async () => {
        try {
            const url = `http://localhost:9281/api/createWishedItem`;
            const response = await http.post(url, formsWishedItem)
                .then(response => {
                    console.log(response.data);
                    console.log(formsWishedItem);
                    if (response.statusText === "ACK-901") {
                        throw new Error("Erreur lors de la création de la suggestion");
                    }
                })
        } catch (error) {
            console.error(error);
        } finally {
            setWishedItemName('');
            setItemDescription('');
            setItemUrl('');
            setSelectedUserPige('')
            setWishedItemImage('')
        }
    }

    const onSubmit = (data) => {
        addWishedItemPost().then(r => console.log(r));
        console.log(data);
    }

    return (
        <div className="renderingElement oui">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <form className='container' onSubmit={onSubmit}>
                        <p>Ajouter une suggestion à ma liste</p>

                        <div className="mb-3">
                            <label>Nom Item</label>
                            <input type="nom" id="typeNom" className="my-3" placeholder={"Nom Item"}
                                   onChange={event => setWishedItemName(event.target.value)} required/>

                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>
                        <div className="mb-3">
                            <label>Description</label>
                            <textarea rows="3" placeholder={"Entrez la description ici"}
                                      onChange={event => setItemDescription(event.target.value)} required/>
                            {msgErrors.message && msgErrors.wishedItemDescription.message}
                        </div>
                        <div className="mb-3">
                            <label>URL</label>
                            <input type="nom" placeholder={"Entrez un url ici"}
                                   onChange={event => setItemUrl(event.target.value)}/>
                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>

                        <div className="mb-3">
                            <label>Image</label>
                            <input type="nom" placeholder={"Entrez l'url d'une image ici"}
                                   onChange={event => setWishedItemImage(event.target.value)}/>
                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>
                        <div>
                            <input type="file" className="form-control" id="exampleFormControlInput1"
                                   placeholder="photo"/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default AddWish;
