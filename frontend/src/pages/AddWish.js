import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import http from "../http/http";


//IMAGE A AJOUTER

const AddWish = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    //const {handleSubmit, reset} = useForm();

    const navigate = useNavigate();

    //Ajout useState, pas terminé
    //UPDATE : useState terminé
    const [wishedItemName, setWishedItemName] = useState('');
    const [wishedItemDescription, setItemDescription] = useState('');
    const [wishedItemUrl, setItemUrl] = useState('');
    //on doit ajouter l'image


    // const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse

    const msgErrors = {

        wishedItemName: {
            requis: "Vous devez saisir un nom"
        },
        wishedItemDescription: {
            requis: "Vous devez saisir une description"
        },

    }
    const formsWishedItem = {
        wishedItemName: wishedItemName,
        wishedItemDescription: wishedItemDescription,
        wishedItemUrl: wishedItemUrl,
        //image
    }

    const pigesPost = async () => {
        try {
            const response = await http.post(`/api/createWishedItem`, formsWishedItem)
                .then(response => {
                    console.log(response.data);
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
            //image
            alert('Suggestion créeée');
            navigate('/pige/myWishList');
        }
    }

    const onSubmit = (data) => {
        pigesPost().then(r => console.log(r));
        console.log(data);
        reset();
    }

    return (
        <div className="hero oui">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <form className='container' onSubmit={handleSubmit(onSubmit)}>
                        <p>Ajouter une suggestion à ma liste</p>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nom Item</label>
                            <input type="nom" id="typeNom" className="form-control my-3"
                                   placeholder={"Nom Item"}
                                   {...register("wishedItemName",
                                       {
                                           required: msgErrors.wishedItemName.requis
                                       })}/>
                            {msgErrors.wishedItemName && msgErrors.wishedItemName.message}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                      {...register("wishedItemDescription", {required: msgErrors.wishedItemDescription.requis})}></textarea>
                            {msgErrors.message && msgErrors.wishedItemDescription.message}
                        </div>
                        <div>
                            <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="photo"/>
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
