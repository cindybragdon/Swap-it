import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const {register, handleSubmit, formState: {errors}, reset} = useForm();


    const msgErrors = {
        email: {
            requis: "Vous devez saisir un email",
            format: "Le email est invalide"
        },
        password: {
            requis: "Vous devez saisir un mot de passe",
            format: "Le mot de passe est invalide"
        }

    }

    const onSubmit = (data) => {
        fetch(`http://localhost:9281/api/loginByEmailAndPassword?userEmail=${data.email}&password=${data.password}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                return data;
            })
            .then(data => {
                if (data.user != null) {
                    navigate(`/piges`);
                    sessionStorage.setItem('user', JSON.stringify(data.user));
                }
            })
            .catch(error => console.error(error))
        //console.log(user.user)
    };


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

                            <div className="form-group d-flex justify-content-between" style={{gap: '1rem'}}>
                                <button type="submit" className="btn flex-grow-1 m-2"
                                        style={{backgroundColor: '#34D1D8'}}>Se connecter
                                </button>
                                <button type="button" className="btn flex-grow-1 m-2" onClick={handleClickCreerCompte}
                                        style={{backgroundColor: '#DB1665'}}>Se créer un compte
                                </button>
                                <a href='/forgotPwd' className="flex-grow-1">
                                    <button type="button" className="btn w-100 m-2"
                                            style={{backgroundColor: '#C5E752'}}>Mot de passe oublié?
                                    </button>
                                </a>
                            </div>
                            <h7 className="text-white m-2 text-center" id="infoText"
                                style={{textAlign: 'center'}}>Laissez-nous
                                organiser votre pige de cadeaux
                            </h7>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;

