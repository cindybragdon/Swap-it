import React, {useState} from "react";
import ImageLapin from "../images/AddPersonneFleur.jpg";
import ImageChapeauLapin from "../images/AddPersonneBouquet.jpg";
import ImageBF from "../images/AddPersonneBG.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddUserToPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageBF})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '85vh',
        justifyContent: 'space-around',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px'
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

    //console.log(JSON.parse(sessionStorage.pigeToAddPeopleTo));
    const formInv = {
        pige: JSON.parse(sessionStorage.pigeToAddPeopleTo),
        firstNameOfWantedUser: firstNameToAdd,
        lastNameOfWantedUser: lastNameToAdd,
        emailWantedUser: emailToAdd,
        asBeenAnswered: asBeenAnswered
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailExists = listFormInv.some(invite => invite.emailWantedUser === emailToAdd);

        if (!emailExists) {
            setListFormInv(listFormInv => [...listFormInv, formInv]);
            console.log('Ajouté:', formInv);
            setFirstNameToAdd('');
            setLastNameToAdd('');
            setEmailToAdd('');
        } else {
            alert("Le courriel est déjà présent dans la liste")
            console.log('Email déjà utilisé:', emailToAdd);
        }
    };

    const handleEditPeople = (emailWantedUser, index) => {
        //listWishedItems.splice(index, 1);
        //setListWishedItems(listWishedItems);
        //axios.put(`http://localhost:9281/api/deleteWishedItem?idWishedItem=${emailWantedUser.idWantedUser}`)
          //  .catch(err => console.log(err));
        //window.location.reload();
    }


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
        <div style={sectionStyle}>
            <div id="container-test" className="container mb-4 p-3 d-flex">
                <div className="card text-center" style={cardStyle} id="container-forgot">
                    <div className="card-header h5 text-white bg-info">On ajoute des participants !</div>
                    <div className="card-body ">
                        <button className="btn btn-secondary d-flex justify-content-center"
                                style={{margin: "auto"}}>
                            <img src={ImageLapin} style={imageStyle} alt="Account"/>
                        </button>
                        <form className='container text-start' onSubmit={handleSubmit}>
                            <div className="form-outline">Prénom
                                <input className="form-control my-3"
                                       placeholder="Prénom du participant"
                                       maxLength="20"
                                       value={firstNameToAdd}
                                       onChange={event => setFirstNameToAdd(event.target.value)} required/>
                            </div>
                            <div className="form-outline">Nom de famille
                                <input className="form-control my-3"
                                       placeholder="Nom de famille du participant"
                                       maxLength="20"
                                       value={lastNameToAdd}
                                       onChange={event => setLastNameToAdd(event.target.value)} required/>
                            </div>
                            <div className="form-outline">Email
                                <input type="email" id="typeEmailZ" className="form-control my-3"
                                       placeholder="Courriel du participant"
                                       maxLength="40"
                                       value={emailToAdd}
                                       onChange={event => setEmailToAdd(event.target.value.toLowerCase())} required/>
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
                            <img src={ImageChapeauLapin} style={imageStyle} alt="Account"/>
                        </button>

                        <p>Les invités sont :</p>
                        <p>Vous serez automatiquement
                            ajouté, {JSON.parse(sessionStorage.user).userFirstName} </p>
                        {listFormInv.map((inv, index) => (
                            <p key={index}>{inv.firstNameOfWantedUser} {inv.lastNameOfWantedUser}, {inv.emailWantedUser}
                                <div className="container position-relative">
                                    <button type="button" className="btn  position-absolute bottom-0 end-0"
                                            //onClick={() => handleEditPeople(emailWantedUser, index)}
                                        >
                                        <i className="bi bi-pencil"></i>
                                    </button>
                                </div>
                            </p>
                        ))}</div>
                    <button className="btn btn-info d-flex justify-content-center"
                            style={{margin: "auto"}} onClick={onClickCreateInvitations}>Tout le monde est là!
                    </button>
                </div>


            </div>
        </div>
    );
}

export default AddUserToPige;
