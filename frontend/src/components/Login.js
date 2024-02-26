import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {

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
        console.log(data);
        reset();
    }

    //useState Bug
    /*
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverResponse, setServerResponse] = useState(null); // [0] = email, [1] = password, [2] = serverResponse
*/
    //Manque a envoyé les données avec Axios, ne fonctionne pas.
/*
    const loginUser = async () => {
        try{
            const response = await axios.post('http://localhost:9281/api/login', {
                userEmail : email,
                userPassword : password
        });
            setServerResponse(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setEmail('');
            setPassword('');
        }
    }
*/
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="form-group row">
                        <input type="email" name="email"  className="form-control" placeholder="Email"
                               { ...register("email",
                                   {required: msgErrors.email.requis, pattern: {value: /^\S+@\S+$/i, message: msgErrors.email.format}})}/>
                        {errors.email && errors.email.message}
                        {errors.email && errors.email.type === "pattern"}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="form-group row">
                        <input type="password" className="form-control" placeholder="Password"
                               { ...register("password",
                                   {required: msgErrors.password.requis, pattern: {value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/, message: msgErrors.password.format}})}/>
                        {errors.password && errors.password.message}
                        {errors.password && errors.password.type === "pattern"}
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>

                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;

