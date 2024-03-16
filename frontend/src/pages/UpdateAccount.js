import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import http from "../http/http";
import '../CreateAccount.css';

// Problème de CSS.  La carte passe en dessous de la navbar et par dessus le footer
// SUR CETTE PAGE, LES PLACEHOLDER SERONT LES ANCIENNES INFOS USER
// POUR CHANGER LE MOT DE PASSE, IL FAUT CONFIRMER LANCIEN QUI NE SERA PAS DEJA DANS LE INPUT

const UpdateAccount = () => {


    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [courriel, setCourriel] = useState('');
    const [motPasse, setMotPasse] = useState('');
    const [nouveauMotPasse, setNouveauMotPasse] = useState('');



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
            logueur: "Le telephone doit avoir au moins 10 caractere"
        },
        courriel: {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        },
        motPasse: {
            requis: "Vous devez saisir votre mot de passe actuel",
            format: "Mot de passe invalide.  Doit contenir : 8 caractères, au moins une lettre, un chiffre et un caractère spécial"
        }
    }

    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('typeMotPasse');
        const toggleIcon = document.getElementById('togglePassword');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.replace('bi-eye-slash', 'bi-eye');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.replace('bi-eye', 'bi-eye-slash');
        }
    };



    const onSubmit = (data) => {

        setNom(data.nom);
        setPrenom(data.prenom);
        setTelephone(data.telephone);
        setCourriel(data.courriel);
        setMotPasse(data.motPasse);
        setNouveauMotPasse(data.nouveauMotPasse);
        createAcc(); // ??
        //console.log(data);
        reset();
    }


//commentaire de Karolann => Manque a envoyé les données avec Axios, ne fonctionne pas. Doit attendre Réda

    const createAcc = async () => {
        try {
            const response = await http.post(`/api/createUserByEmail`);
            setServerResponse(response.data);
            console.log(response)
        } catch (error) {
            console.error(error);
        } finally {
            setCourriel('');
        }

    }

    return (
        <div className='hero oui '>
            <div className="card text-center card w-50 mt-5 ">
                <div className="card-header h5 text-white bg-info">Modifier votre compte Swap-it!</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Vos nouvelles informations ici
                    </p>
                    <div className="form-outline text-start">
                        <label>Nom</label>
                        <input type="nom" id="typeNom" className="form-control my-3"
                               placeholder={"user.getNom"}
                               {...register("nom",
                                   {
                                       required: msgErrors.nom.requis
                                   })}/>
                    </div>
                    <div className="form-outline text-start">
                        <label>Prénom</label>
                        <input type="prenom" id="typePrenom" className="form-control my-3"
                               placeholder={"user.getPrenom"}
                               {...register("prenom",
                                   {
                                       required: msgErrors.prenom.requis
                                   })}/>
                    </div>
                    <div className="form-outline text-start">
                        <label>Telephone</label>
                        <input type="telephone" id="typeTelephone" className="form-control my-3"
                               placeholder={"user.getPhone"}
                               {...register("telephone",
                                   {
                                       required: msgErrors.telephone.requis,
                                       pattern: {value: /^[0-9]{10}$/, message: msgErrors.telephone.format}
                                   })}/>
                        {errors.telephone && errors.telephone.message}
                        {errors.telephone && errors.telephone.type === "pattern"}
                    </div>
                    <div className="form-outline text-start">
                        <label>Courriel</label>
                        <input type="courriel" id="typeEmail" className="form-control my-3"
                               placeholder={"user.getEmail"}
                               {...register("courriel",
                                   {
                                       required: msgErrors.courriel.requis,
                                       pattern: {value: /^\S+@\S+$/i, message: msgErrors.courriel.format}
                                   })}/>
                        {errors.courriel && errors.courriel.message}
                        {errors.courriel && errors.courriel.type === "pattern"}
                    </div>
                    <div className="form-outline ">
                        <p className="password-container text-start">
                            <input type="password" id="typeMotPasse" className="form-control my-3"
                                   placeholder={"Votre MOT DE PASSE ACTUEL"}
                                   {...register("motPasse", {
                                       required: msgErrors.motPasse.requis,
                                       pattern: {
                                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
                                           message: msgErrors.motPasse.format
                                       }
                                   })}  />
                            <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                               onClick={togglePasswordVisibility}></i>
                        </p>
                        <p className="password-container text-start">
                            <input type="password" id="typeNouveauMotPasse" className="form-control my-3"
                                   placeholder={"Votre NOUVEAU MOT DE PASSE"}
                                   {...register("nouveauMotPasse", {
                                       required: msgErrors.motPasse.requis,
                                       pattern: {
                                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
                                           message: msgErrors.motPasse.format
                                       }
                                   })}  />
                            <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                               onClick={togglePasswordVisibility}></i>
                        </p>
                        <small id="emailHelp" className="form-text text-muted">
                            Doit contenir : une minuscule, une majuscule, un chiffre, un caractère spécial et de 8 à 15
                            caractères.
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
                        <a className="" href="/">Retour à votre compte sans faire de changements</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UpdateAccount;