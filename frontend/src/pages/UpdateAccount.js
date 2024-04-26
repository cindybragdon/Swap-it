import React, {useState} from 'react';
import http from "../http/http";
import '../CreateAccount.css';
import ImagePencil from "../images/UpdatePencil.jpg";
import TogglePasswordVisibility from "../components/TogglePassVisibility";
import {connectAcc} from "../axi/AxiFunc";
import {useNavigate} from "react-router-dom";

const UpdateAccount = () => {

    const navigate = useNavigate();
    var sectionStyle = {
        backgroundImage: `url(${ImagePencil})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: "Reddit Mono",
        minHeight: '100vh'
    }

    const currentUser = JSON.parse(sessionStorage.user);

    const [prenom, setPrenom] = useState(currentUser.userFirstName);
    const [nom, setNom] = useState(currentUser.userLastName);
    const [telephone, setTelephone] = useState(currentUser.userPhone);
    const [courriel, setCourriel] = useState(currentUser.userEmail);
    const [image, setImage] = useState(currentUser.userImage);
    const [motPasse, setMotPasse] = useState('');
    const [nouveauMotPasse, setNouveauMotPasse] = useState('');

    const formUpdateUserAndPWD = {
        userPassword: nouveauMotPasse,
        user: {
            idUser: currentUser.idUser,
            userFirstName: prenom,
            userLastName: nom,
            userEmail: courriel,
            userPhone: telephone,
            userImage: image
        }
    }


    const togglePasswordVisibility = () => {
        const passwordInput = document.getElementById('typeMotPasse');
        const toggleIcon = document.getElementById('togglePassword');
        console.log(passwordInput.type);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.replace('bi-eye-slash', 'bi-eye');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.replace('bi-eye', 'bi-eye-slash');
        }
    };


    const togglePasswordVisibility2 = () => {
        const passwordInput = document.getElementById('typeMotPasse2');
        const toggleIcon = document.getElementById('togglePassword2');
        console.log(passwordInput.type);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.replace('bi-eye-slash', 'bi-eye');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.replace('bi-eye', 'bi-eye-slash');
        }
    };


    const onSubmit = () => {
        checkIfPasswordCorresponds();
    }


    const checkIfPasswordCorresponds = async () => {
        try {
            const response = await http.get(`getPWDByIdUser?idUser=${currentUser.idUser}`);
            console.log(motPasse);
            console.log(response.data.userPassword);
            if (response.data.userPassword === motPasse) {
                await updateACC()
            } else {
                alert("Courriel incorrect ou mot de passe erronné")
            }
        } catch (error) {
            console.error(error);
        }
    }
    const updateACC = async () => {
        try {
            const response = await http.put(`updatePwdAndUser`, formUpdateUserAndPWD);
            if (response.data === "ACK-210") {
                let response = connectAcc(formUpdateUserAndPWD);
                if (response) {
                    navigate('/myaccount');
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleClickUpdateCompte = () => {
        alert("Vos infos sont modifiées!")
        navigate('/myaccount');
    }


    return (
        <div className="row justify-content-center" style={sectionStyle}>
            <div className="card text-center card w-50 mt-5 " id="container-update">
                <div className="card-header h5 text-white bg-info">Modifier votre compte Swap-it!</div>
                <div className="card-body px-5">

                    <p className="card-text py-2">
                        Vos nouvelles informations ici
                    </p>

                    <form onSubmit={onSubmit}>
                        <div className="text-start">
                            <label>Prenom</label>
                        </div>
                        <div>
                            <input type="text" name="prenom" id="typePrenom" className="form-control my-3"
                                   placeholder={"Votre prenom"} value={prenom}
                                   onChange={event => setPrenom(event.target.value)} required/>
                        </div>


                        <div className="text-start">
                            <label>Nom</label>
                        </div>
                        <div>
                            <input type="text" name="nom" id="typeNom" className="form-control my-3"
                                   placeholder={"Votre nom"} value={nom} onChange={event => setNom(event.target.value)}
                                   required/>

                        </div>


                        <div className="text-start">
                            <label>Telephone</label>
                        </div>
                        <div>
                            <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" name="telephone" id="typeTelephone"
                                   className="form-control my-3" placeholder={"Votre telephone"} value={telephone}
                                   onChange={event => setTelephone(event.target.value)}/>

                        </div>

                        <div className="text-start">
                            <label>Image (doit être un lien https vers une image)</label>
                        </div>
                        <div>
                            <input name="urlImage" id="typeImage"
                                   className="form-control my-3" placeholder={"Le lien https vers votre image : "}
                                   value={image}
                                   onChange={event => setImage(event.target.value)}/>

                        </div>


                        <div className="text-start">
                            <label>Courriel</label>
                        </div>
                        <div>
                            <input pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" type="email" name="courriel"
                                   id="typeEmail" className="form-control my-3" placeholder={"Votre courriel"}
                                   value={courriel}
                                   onChange={event => setCourriel(event.target.value)} required/>


                        </div>
                        <div className="text-start">
                            <label>Mot de Passe : <small id="update-pw"> Veuillez écrire votre mot de passe
                                courrant </small>
                            </label>
                        </div>

                        <div className="form-outline ">
                            <div>
                                <p className="password-container-create-account">
                                    <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" name="motPasse"
                                           id="typeMotPasse" className="form-control my-3 create-account"
                                           placeholder={"Votre mot de passe"}
                                           onChange={event => setMotPasse(event.target.value)} required/>
                                    <i className="bi bi-eye-slash toggle-password" id="togglePassword"
                                       onClick={TogglePasswordVisibility}></i>
                                </p>


                            </div>

                            <div className="text-start">
                                <label>Nouveau mot de Passe : </label>
                            </div>
                            <div>
                                <p className="password-container-create-account">
                                    <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" name="motPasse"
                                           id="typeMotPasse2" className="form-control my-3 create-account"
                                           placeholder={"Votre nouveau mot de passe : "}
                                           onChange={event => setNouveauMotPasse(event.target.value)} required/>
                                    <i className="bi bi-eye-slash toggle-password" id="togglePassword2"
                                       onClick={togglePasswordVisibility2}></i>
                                </p>

                            </div>


                            <small id="emailHelp" className="form-text text-muted">
                                Doit contenir : une minuscule, une majuscule, un chiffre, un caractère spécial et de 8 à
                                15
                                caractères.
                            </small>

                        </div>
                        <br/>
                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30">Modifier vos informations!</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <a id="link-text" className="" href="/">Retour à la page d'accueil </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
        ;
}

export default UpdateAccount;