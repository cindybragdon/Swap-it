import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import http from "../http/http";
import ImageCles from "../images/24506e66-0f0e-4633-8d9c-af3d8cacf4e9.webp"


// Atteindre cette page au http://localhost:5555/forgotpwd
// Atteindre cette page au http://localhost:5555/forgotpwd


const ForgotPwd = () => {


    var sectionStyle = {
        backgroundImage: `url(${ImageCles})`
    }

    const { register, handleSubmit, formState: { errors}, reset } = useForm();

    const [email, setEmail] = useState('');
    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


    const msgErrors = {
        email : {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        }
    }

    const onSubmit = (data) => {
        setEmail(data.email);
        emailPwd();
        //console.log(data);
        reset();
    }


    //Manque a envoyé les données avec Axios, ne fonctionne pas.

    const emailPwd = async () => {
        try{
            const response = await http.get(`/getUserByEmail?email=${email}`);
            setServerResponse(response.data);
            console.log(response)
        } catch (error) {
            console.error(error);
        } finally {
            setEmail('');
        }
    }

    return (
        <>
            <div className='hero oui ' style={sectionStyle}>
                <div className="card text-center card w-50">
                    <div className="card-header h5 text-white bg-info">Mot de passe perdu</div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Entrez votre courriel et vous vous enverrons des instructions à suivre pour réinitialiser
                            votre mot de passe.
                        </p>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" className="form-control my-3"
                                   placeholder={"votre courriel ici"}
                                   { ...register("email",
                                       {required: msgErrors.email.requis, pattern: {value: /^\S+@\S+$/i, message: msgErrors.email.format}})}/>
                            {errors.email && errors.email.message}
                            {errors.email && errors.email.type === "pattern"}
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30" >Reset mot de passe</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <a className="" href="/">Connexion au compte</a>
                            <a className="" href="/">Se créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPwd;
