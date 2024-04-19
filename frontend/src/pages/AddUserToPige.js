import React, { useState } from "react";
import ImageLapin from "../images/AddPersonneFleur.jpg";
import ImageChapeauLapin from "../images/AddPersonneBouquet.jpg";
import ImageBF from "../images/AddPersonneBG.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUserToPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageBF})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        justifyContent: 'space-around',
        fontFamily: "Reddit Mono",
        width: '100vw'
    };

    const cardStyle = {
        width: '48%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const imageStyle = {
        height: '180px',
        width: '210px'
    };

    const [listFormInv, setListFormInv] = useState([]);
    const [emailToAdd, setEmailToAdd] = useState('');
    const [firstNameToAdd, setFirstNameToAdd] = useState('');
    const [lastNameToAdd, setLastNameToAdd] = useState('');
    const asBeenAnswered = false;
    const navigate = useNavigate();

    const formInv = {
        pige: JSON.parse(sessionStorage.pigeToAddPeopleTo),
        firstNameOfWantedUser: firstNameToAdd,
        lastNameOfWantedUser: lastNameToAdd,
        emailWantedUser: emailToAdd,
        asBeenAnswered: asBeenAnswered
    };

    const handleSubmit = (event) => {
        setListFormInv(listFormInv => [...listFormInv, formInv]);
        console.log(listFormInv);
        event.preventDefault();
    };

    const onClickCreateInvitations = () => {
        const url = `http://localhost:9281/api/createInvitation`;
        axios.post(url, listFormInv)
            .then(res => {
                if (res.data === "ACK-400") {
                    alert(`Les invitations ont bien été envoyées!`);
                    navigate(`/piges`);
                } else {
                    alert(`Erreur : Les invitations n'ont pas été envoyées.`)
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container mb-4 p-3 d-flex" style={sectionStyle}>
            <div className="card text-center" style={cardStyle} id="container-forgot">
                <div className="card-header h5 text-white bg-info">On ajoute des participants !</div>
                <div className="card-body ">
                    <button className="btn btn-secondary d-flex justify-content-center"
                            style={{margin: "auto"}}>
                        <img src={ImageLapin} style={imageStyle}   alt="Account"/>
                    </button>
                    <form className='container text-start' onSubmit={handleSubmit}>
                        <div className="form-outline">Prénom
                            <input className="form-control my-3"
                                   placeholder="Prénom du participant"
                                   onChange={event => setFirstNameToAdd(event.target.value)} required/>
                        </div>
                        <div className="form-outline">Nom de famille
                            <input className="form-control my-3"
                                   placeholder="Nom de famille du participant"
                                   onChange={event => setLastNameToAdd(event.target.value)} required/>
                        </div>
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
            <div className="card text-center" style={cardStyle} id="container-forgot">
                <div className="card-header h5 text-white bg-info"> Tout le monde est la?!</div>
                <div className="card-body ">
                    <button className="btn btn-secondary d-flex justify-content-center"
                            style={{margin: "auto"}}>
                        <img src={ImageChapeauLapin} style={imageStyle}   alt="Account"/>
                    </button>
                    <p>Les invités sont :</p>
                    {listFormInv.map((inv) => (
                        <p>{inv.firstNameOfWantedUser} {inv.lastNameOfWantedUser}, {inv.emailWantedUser}</p>
                    ))}</div>
                <button className="btn btn-info d-flex justify-content-center"
                        style={{margin: "auto"}} onClick={onClickCreateInvitations}>Tout le monde est là!</button>
            </div>


</div>
);
}

export default AddUserToPige;
