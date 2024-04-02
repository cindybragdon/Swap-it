import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import http from "../http/http";
import {useLocation, useNavigate} from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();


    const [user, setUser] = useState('');


    const { register, handleSubmit, formState: { errors}, reset } = useForm();



    const msgErrors = {
        email : {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        },
        password : {
            requis: "Vous devez saisir un mot de passe",
            format: "Le mot de passe est invalide"
        }

    }
    const onSubmit = (data) => {
        fetch(`http://localhost:9281/api/loginByEmailAndPassword?userEmail=${data.email}&password=${data.password}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error))
            //console.log(user.user)
        if (user.user != null) {
            navigate(`/piges`);
            sessionStorage.setItem('user', JSON.stringify(user.user));
        }

        //console.log(data);
    }

    const handleClickCreerCompte = () => {
        navigate('/create-account');
    }



    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="text-white m-2" id="home-label">Email :</label>
                                <input id="required" type="email" className="form-control m-2" placeholder="Email"
                                       {...register("email", {
                                           required: "  Vous devez saisir un email",
                                       })}
                                />
                                {errors.email && <p className="m-2 msgError">{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <label className="text-white m-2" id="home-label"> Password : </label>
                                <input type="password" className="form-control m-2" placeholder="Password"
                                    {...register("password", {
                                        required: " Vous devez saisir un mot de passe",
                                    })}
                                    />
                                {errors.password && <p className="m-2 msgError">{errors.password.message}</p>}
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-info m-2">Se connecter</button>
                                <button type="button" className="btn btn-info m-2" onClick={handleClickCreerCompte}>Se créer un compte</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;

