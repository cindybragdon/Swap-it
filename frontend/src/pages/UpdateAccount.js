import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import http from "../http/http";
import '../CreateAccount.css';
import ImageParty from "../images/Party1.jpg";

const UpdateAccount = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageParty})`,
        position: 'relative',
        minHeight: '100vh',
    }

    const currentUser = JSON.parse(sessionStorage.getItem('user'));

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [nom, setNom] = useState(currentUser.userLastName);
    const [prenom, setPrenom] = useState(currentUser.userFirstName);
    const [telephone, setTelephone] = useState(currentUser.userPhone);
    const [courriel, setCourriel] = useState(currentUser.userEmail);
    const [motPasse, setMotPasse] = useState('');
    const [nouveauMotPasse, setNouveauMotPasse] = useState('');

    const formsUpdateAccount = {
        userPassword: motPasse,
        user: {
            idUser: currentUser.idUser,
            userFirstName: prenom,
            userLastName: nom,
            userEmail: courriel,
            userPhone: telephone
        }
    }

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
        updateAcc().then(r => console.log(r));
    }

    const updateAcc = async () => {

        try {

            const response = await http.put(`updatePwdById`, formsUpdateAccount)
            .then(response => {
                console.log(response.data);
                if (response.statusText === "ACK-211") {
                    throw new Error("Erreur lors de la création du compte");
                }
            });
            console.log(formsUpdateAccount);


        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className='' style={sectionStyle}>
            <div className="card text-center card w-50 mt-5 ">
                <div className="card-header h5 text-white bg-info">Modifier votre compte Swap-it!</div>
                <div className="card-body px-5">
                    <p className="card-text py-2">
                        Vos nouvelles informations ici
                    </p>
                    <div className="form-outline text-start">
                        <label>Prénom</label>
                        <input type="prenom" id="typePrenom" className="form-control my-3" value={prenom}
                               placeholder={"votre prénom : "} required
                               onChange={event => setPrenom(event.target.value)}/>
                    </div>
                    <div className="form-outline text-start">
                        <label>Nom</label>
                        <input type="nom" id="typeNom" className="form-control my-3" value={nom}
                               placeholder={"votre nom : "} required onChange={event => setNom(event.target.value)}/>
                    </div>

                    <div className="form-outline text-start">
                        <label>Telephone</label>
                        <input type="telephone" id="typeTelephone" className="form-control my-3" value={telephone}
                               placeholder={"votre téléphone : "}
                               pattern={"\"[0-9]{3}[0-9]{3}[0-9]{4}\""} required
                               onChange={event => setTelephone(event.target.value)}/>
                        {errors.telephone && errors.telephone.message}
                        {errors.telephone && errors.telephone.type === "pattern"}
                    </div>
                    <div className="form-outline text-start">
                        <label>Courriel</label>
                        <input type="courriel" id="typeEmail" className="form-control my-3" value={courriel}
                               placeholder={"votre email : "} pattern={"[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$"}
                               required onChange={event => setCourriel(event.target.value)}/>
                        {errors.courriel && errors.courriel.message}
                        {errors.courriel && errors.courriel.type === "pattern"}
                    </div>
                    <div className="form-outline ">
                        <div className="password-container text-start position-relative">
                            <input type="password" id="typeMotPasse" className="form-control my-3 pr-5"
                                   placeholder="Votre MOT DE PASSE ACTUEL" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                   required onChange={event => setMotPasse(event.target.value)}/>
                            <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                               onClick={togglePasswordVisibility}
                               style={{
                                   position: 'absolute',
                                   top: '50%',
                                   right: '10px',
                                   transform: 'translateY(-50%)',
                                   cursor: 'pointer'
                               }}></i>
                        </div>

                        <div className="form-outline ">
                            <div className="password-container text-start position-relative">
                                <input type="password" id="typeMotPasse" className="form-control my-3 pr-5"
                                       placeholder="Votre NOUVEAU MOT DE PASSE"
                                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                                       onChange={event => setNouveauMotPasse(event.target.value)}/>
                                <i className="bi bi-eye-slash toggle-password" id="typeMotPasse"
                                   onClick={togglePasswordVisibility}
                                   style={{
                                       position: 'absolute',
                                       top: '50%',
                                       right: '10px',
                                       transform: 'translateY(-50%)',
                                       cursor: 'pointer'
                                   }}></i>
                            </div>
                        </div>
                        <small id="emailHelp" className="form-text text-muted">
                            Doit contenir : une minuscule, une majuscule, un chiffre et au moins 8 charactères..
                        </small>
                        {errors.motPasse && errors.motPasse.message}
                        {errors.motPasse && errors.motPasse.type === "pattern"}
                    </div>
                    <br/>
                    <div className="form-group row">
                        <div className="col-sm-20 text-center">
                            <button type="submit" className="btn btn-info w-30">Modifier mon compte</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <a className="" href="/">Retour à votre compte sans faire de changements</a>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default UpdateAccount;