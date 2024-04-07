import React, {useState} from "react";
import ImageLapin from "../images/Lapin.jpg";
import {useForm} from "react-hook-form";
import ImageChapeauLapin from "../images/ChapeauLapins.jpg";
import {createInvitations} from "../axi/AxiPost";
import {useNavigate} from "react-router-dom";


const AddUserToPige = () => {

    const [listUserEmail, setListUserEmail] = useState([]);

    const [emailToAdd, setEmailToAdd] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + emailToAdd);
        setListUserEmail(listUserEmail => [...listUserEmail, emailToAdd])
        console.log(listUserEmail);
        event.preventDefault();
    }

    const onClickEnoughPeople = () => {
        const minNumberPeople = 3;
        if (listUserEmail.length < minNumberPeople) {
            alert('Il doit y avoir au moins 3 utilisateurs pour une pige.')
        } else {
            createInvitations(listUserEmail);
            alert('invitations envoyées');
            navigate("/piges");
        }
    }

    return (
        <div className="container mb-4 p-3 d-flex">

            <div className="card text-center " id="container-forgot">
                <div className="card-header h5 text-white bg-info">On ajoute des participants au chapeau!</div>
                <div className="card-body ">
                    <button className="btn btn-secondary d-flex justify-content-center"
                            style={{margin: "auto"}}>
                        <img src={ImageLapin} height="220" width="250" alt="Account"/>
                    </button>
                    <form className='container text-start' onSubmit={handleSubmit}>
                        <label className="form-outline">Prénom
                            <input className="form-control my-3" placeholder="Prénom"/>
                        </label>
                        <label className="form-outline">Nom
                            <input className="form-control my-3" placeholder="Nom"/>
                        </label>

                        <div className="form-outline">Email
                            <input type="email" id="typeEmailZ" className="form-control my-3"
                                   placeholder="Courriel du participant"
                                   onChange={event => setEmailToAdd(event.target.value)} required/>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-20 text-center">
                                <button type="submit" className="btn btn-info w-30">Et hop, un de plus!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-around">


                <div className="container mb-4 p-3 d-flex">
                    <div className="card text-center d-flex flex-column" style={{height: "100%"}}
                         id="container-forgot">
                        <div className="card-header h5 text-white bg-info">Ils sont tous là?</div>
                        <div className="card-body d-flex flex-column" style={{flex: "1"}}>
                            <div className="form-outline">
                                <p>Prénom du participant</p>
                                <div className="form-outline">
                                    <p>Nom de famille du participant 1</p>
                                </div>
                            </div>
                            <div className="form-outline">
                                <p>Courriel du participant 1</p>
                            </div>
                            <button className="btn btn-secondary d-flex justify-content-center mt-auto"
                                    style={{width: "100%", margin: "auto"}}>
                                <img src={ImageChapeauLapin} height="220" width="250" alt="Account"/>
                            </button>
                            {listUserEmail.map((userToAdd) => (
                                <p>{userToAdd}</p>
                            ))}
                        </div>
                        <button onClick={onClickEnoughPeople}>Tout le monde est là!</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddUserToPige;