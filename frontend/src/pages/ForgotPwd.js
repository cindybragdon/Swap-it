import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import http from "../http/http";
import ImageForgotPass from "../images/CadenasCles.jpg"


const ForgotPwd = () => {


    var sectionStyle = {
        backgroundImage: `url(${ImageForgotPass})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '85vh',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px'
    }

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [email, setEmail] = useState('');
    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


    const msgErrors = {
        email: {
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


    const emailPwd = async () => {
        try {
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
            <div className='renderingElement card justify-content-center' style={sectionStyle}>
                <div className="card text-center card w-50" id="container-forgot">
                    <div className="card-header h5 text-white " style={{backgroundColor: '#625FC8'}}>Mot de passe
                        perdu
                    </div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Entrez votre courriel et nous vous enverrons des instructions à suivre afin de réinitialiser
                            votre mot de passe.
                        </p>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" className="form-control my-3"
                                   placeholder={"Votre courriel ici"}
                                   {...register("email",
                                       {
                                           required: msgErrors.email.requis,
                                           pattern: {value: /^\S+@\S+$/i, message: msgErrors.email.format}
                                       })}/>
                            {errors.email && errors.email.message}
                            {errors.email && errors.email.type === "pattern"}
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30">Reset mot de passe</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <a id="link-text" className="" href="/">Connexion au compte</a>
                            <a id="link-text" className="" href="/create-account">Se créer un compte</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPwd;
