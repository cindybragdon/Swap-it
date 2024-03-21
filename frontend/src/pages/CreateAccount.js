import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import http from "../http/http";
import '../CreateAccount.css';
import TogglePasswordVisibility from "../components/TogglePassVisibility";
import {Link} from "react-router-dom";

const CreateAccount = () => {

// Problème avec le create user dans le controller, manque le password. Ignorer pour le moment.
    //Pour le password voir exemple span dans le label Password.

    /*
    * @KarolannMauger
    * @Date : 2024-03-18
    * @Revision1 :
    * Faire le name dans les input.
    * Ajoutr les errors message pour chaque input. Voir exemple du input nom.
    * Changement du a href vers un Link. Le a href toujours en commentaire pour voir la diff
    * Dupplicatino de la function voir et caché password. Elle est présente dans le update, je l'ai laissé.
    * Suppression des useState et utilisation de watch, vient du react-hook-form.
    * Problème avec le create user dans le controller, manque le password. Ignorer pour le moment.
    * Modification du onSubmit. Fonctionne maintenant.
    * Correction du post Axios. Fonctionne maintenant.
    * Changement des types pour text, email or password pour les input. Cela ne doit pas être le nom de l'élément. Déjà corrigé.
    *
    * Les choses que j'ai modifié sont soit en commentaire ou supprimé, pour le bien du code.
    * Quelques console.log ne sont pas obligatoire.
    * En somme, la création de compte fonctionne, sans le stockage du password.
    *
    * Pourquoi ceci à été supprimé et les watch aussi.
     * */

    const {register, watch, handleSubmit, formState: {errors}, reset} = useForm();

    /*
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [courriel, setCourriel] = useState('');
    const [motPasse, setMotPasse] = useState('');
    */
    const nom = watch("nom", "");

    const prenom = watch("prenom", "");
    const telephone = watch("telephone", "");
    const courriel = watch("courriel", "");
    const motPasse = watch("motPasse", "");


    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


    const msgErrors = {

        nom: {
            requis: "Vous devez saisir un nom"
        },
        prenom: {
            requis: "Vous devez saisir un prenom"
        },
        telephone: {
            requis: "Vous devez saisir un numero de telephone",
            format: "Le telephone est invalide"
        },
        courriel: {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        },
        motPasse: {
            requis: "Vous devez saisir un mot de passe",
            format: "Mot de passe invalide.  Doit contenir : 8 caractères, au moins une lettre, un chiffre et un caractère spécial"
        }
    }

    const formsCreateAccount = {
        userFirstName: prenom,
        userLastName: nom,
        userEmail: courriel,
        userPhone: telephone,
        userMotPasse: motPasse
    }

    const onSubmit = (data) => {
        //setNom(data.nom);
        //setPrenom(data.prenom);
        //setTelephone(data.telephone);
        //setCourriel(data.courriel);
        //setMotPasse(data.motPasse);
        createAcc().then(r => console.log(r));
        console.log(data);
        reset();
    }


    const createAcc = async () => {
        try {
            const response = await http.post(`/createUserByEmail`, formsCreateAccount)
                .then(response => {
                    console.log(response.data);
                    if (response.statusText === "ACK-101") {
                        throw new Error("Erreur lors de la création du compte");
                    }
                })
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Création de compte réussi");

        }

    }

    return (
        <div className='hero oui '>
            <div className="card text-center card w-50 mt-5">
                <div className="card-header h5 text-white bg-info">Créer un compte Swap-it!</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Vos information ici
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-start">
                            <label>Nom</label>
                        </div>
                        <div className="form-outline ">
                            <input type="text" name="nom" id="typeNom" className="form-control my-3"
                                   placeholder={"Votre nom"}
                                   {...register("nom",
                                       {
                                           required: msgErrors.nom.requis
                                       })}/>
                            {errors.nom && errors.nom.message}
                        </div>
                        <div className="text-start">
                            <label>Prenom</label>
                        </div>
                        <div className="form-outline">
                            <input type="text" name="prenom" id="typePrenom" className="form-control my-3"
                                   placeholder={"Votre prenom"}
                                   {...register("prenom",
                                       {
                                           required: msgErrors.prenom.requis
                                       })}/>
                            {errors.prenom && errors.prenom.message}

                        </div>
                        <div className="text-start">
                            <label>Telephone</label>
                        </div>
                        <div className="form-outline">
                            <input type="text" name="telephone" id="typeTelephone" className="form-control my-3"
                                   placeholder={"Votre telephone"}
                                   {...register("telephone",
                                       {
                                           required: msgErrors.telephone.requis,
                                           pattern: {
                                               value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                                               message: msgErrors.telephone.format
                                           }
                                       })}/>
                            {errors.telephone && errors.telephone.message}
                            {errors.telephone && errors.telephone.type && errors.telephone.type === "pattern"}
                        </div>
                        <div className="text-start">
                            <label>Courriel</label>
                        </div>
                        <div className="form-outline">
                            <input type="email" name="courriel" id="typeEmail" className="form-control my-3"
                                   placeholder={"Votre courriel"}
                                   {...register("courriel",
                                       {
                                           required: msgErrors.courriel.requis,
                                           pattern: {value: /^\S+@\S+$/i, message: msgErrors.courriel.format}
                                       })}/>
                            {errors.courriel && errors.courriel.message}
                            {errors.courriel && errors.courriel.type && errors.courriel.type === "pattern"}

                        </div>
                        <div className="text-start">
                            <label>Mot de Passe : <span id="toto">Doit contenir une minuscule, </span> <span id="tata">une majuscule </span> <span id="titi">et 8 caractères</span></label>
                        </div>
                        <div className="form-outline">
                            <p className="password-container">
                                <input type="password" name="motPasse" id="typeMotPasse" className="form-control my-3"
                                       placeholder={"Votre mot de passe"}
                                       {...register("motPasse", {
                                           required: msgErrors.motPasse.requis,
                                           pattern: {
                                               value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
                                               message: msgErrors.motPasse.format
                                           }
                                       })}  />
                                <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                                   onClick={TogglePasswordVisibility}></i>
                            </p>
                            <small id="emailHelp" className="form-text text-muted">


                            </small>
                            {errors.motPasse && errors.motPasse.message}
                            {errors.motPasse && errors.motPasse.type === "pattern"}
                        </div>
                        <br/>
                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30">Creer mon compte</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/" rel="noopener noreferrer">Compte existant? Connexion ici!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default CreateAccount;


