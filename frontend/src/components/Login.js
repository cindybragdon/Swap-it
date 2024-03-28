import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import http from "../http/http";



const Login = () => {

    const { register, handleSubmit, formState: { errors}, reset } = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse


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
        setEmail(data.email);
        setPassword(data.password);
        loginUser();
        //console.log(data);
        reset();
    }

    const loginUser = async () => {
        try{
            const response = await http.get(`/getUserByEmail?email=${email}&password=${password}`);
            setServerResponse(response.data);
            console.log(response)
        } catch (error) {
            console.error(error);
        } finally {
            setEmail('');
            setPassword('');
        }
    }

    return (
        <>
            <div className="container">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label className="text-white m-2">Email :</label>
                                <input type="email" className="form-control m-2" placeholder="Email"
                                       {...register("email", {
                                           required: "Vous devez saisir un email",
                                           pattern: {
                                               value: /^\S+@\S+$/i,
                                               message: "Le email est invalide"
                                           }
                                       })}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <label className="text-white m-2">Password :</label>
                                <input type="password" className="form-control m-2" placeholder="Password"
                                       {...register("password", {
                                           required: "Vous devez saisir un mot de passe",
                                           pattern: {
                                               value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                               message: "Le mot de passe est invalide"
                                           }
                                       })}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-info m-2" >Se connecter</button>
                                <button type="button" className="btn btn-info m-2" >Se créer un compte</button>
                            </div>
                        </div>
                    </div>
                </form>
                {serverResponse && <p>{serverResponse}</p>}

            </div>
        </>
    );
};

export default Login;

