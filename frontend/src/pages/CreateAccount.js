import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import '../CreateAccount.css';
import TogglePasswordVisibility from "../components/TogglePassVisibility";
import {Link, useNavigate} from "react-router-dom";
import ImageBG from "../images/createAccountBG.jpg";
import {createAcc} from "../axi/AxiPost";
import {connectAcc} from "../axi/AxiFunc"

const CreateAccount = () => {

    const navigate = useNavigate();

    var sectionStyle = {
        backgroundImage: `url(${ImageBG})`,
        minHeight: '85vh',
        backgroundRepeat: 'no repeat',
        backgroundSize: 'cover',
        border: 'white solid 3px'
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

    const {register, handleSubmit, formState: {errors}, reset} = useForm();


    const [prenom, setPrenom] = useState('');
    const [nomFamille, setNomFamille] = useState('');
    const [telephone, setTelephone] = useState('');
    const [courriel, setCourriel] = useState('');
    const [motPasse, setMotPasse] = useState('');


    const formsCreateAccount = {
        userPassword: motPasse,
        user: {
            userFirstName: prenom,
            userLastName: nomFamille,
            userEmail: courriel,
            userPhone: telephone
        }
    }

    const onSubmit = () => {
        let response = createAcc(formsCreateAccount);
        if (response) {
            response = connectAcc(formsCreateAccount);
            if (response) {
                navigate('/piges');
            }
        }
        reset();
    }


    return (
        <div className='renderingElement' style={sectionStyle}>
            <div className="card text-center card  mt-5" id="container-create">
                <div className="card-header h5 text-white bg-info">Créer un compte Swap-it!</div>
                <div className="card-body px-5">
                    <p className="card-text ">
                        Vos informations ici
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="text-start">
                            <label>Prenom</label>
                        </div>
                        <div>
                            <input type="text" name="prenom" id="typePrenom" className="form-control my-3"
                                   placeholder={"Votre prenom"} onChange={event => setPrenom(event.target.value)}
                                   required/>
                            {errors.prenom && errors.prenom.message}
                        </div>

                        <div className="text-start">
                            <label>Nom de famille</label>
                        </div>
                        <div>
                            <input type="text" name="nomFamille" id="typeNom" className="form-control my-3"
                                   placeholder={"Votre nom de famille"}
                                   onChange={event => setNomFamille(event.target.value)} required/>
                            {errors.nom && errors.nom.message}
                        </div>


                        <div className="text-start">
                            <label>Telephone</label>
                        </div>
                        <div>
                            <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" name="telephone" id="typeTelephone"
                                   className="form-control my-3" placeholder={"Votre telephone"}
                                   onChange={event => setTelephone(event.target.value)}/>
                            {errors.telephone && errors.telephone.message}
                            {errors.telephone && errors.telephone.type && errors.telephone.type === "pattern"}
                        </div>


                        <div className="text-start">
                            <label>Courriel</label>
                        </div>
                        <div>
                            <input pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" type="email" name="courriel"
                                   id="typeEmail" className="form-control my-3" placeholder={"Votre courriel"}
                                   onChange={event => setCourriel(event.target.value)}/>
                            {errors.courriel && errors.courriel.message}
                            {errors.courriel && errors.courriel.type && errors.courriel.type === "pattern"}

                        </div>
                        <div className="text-start">
                            <label>Mot de Passe : <span id="toto">Doit contenir une minuscule, </span> <span id="tata">une majuscule </span>
                                <span id="titi">et 8 caractères</span></label>
                        </div>
                        <div>
                            <p className="password-container-create-account">
                                <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" name="motPasse"
                                       id="typeMotPasse" className="form-control my-3 create-account"
                                       placeholder={"Votre mot de passe"}
                                       onChange={event => setMotPasse(event.target.value)}/>
                                <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                                   onClick={TogglePasswordVisibility}></i>
                            </p>

                            {errors.motPasse && errors.motPasse.message}
                            {errors.motPasse && errors.motPasse.type === "pattern"}
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30">Creer mon compte</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/" rel="noopener noreferrer" id="link-text">Compte existant? Connexion ici!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default CreateAccount;


