import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ImageBGWish from "../images/BGPiges2.jpg";
import BackToTopButton from "../components/BackToTopButton";
import axios from "axios";


const MyPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageBGWish})`,
        width: '100%',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: 'white solid 3px',
    }


    const navigate = useNavigate();

    const location = useLocation();
    const selectedUserPige = location.state;

    const [listUserPige, setListIUserPige] = useState([]);
    const [listInvitation, setListInvitation] = useState([]);


    console.log(selectedUserPige);

    useEffect(() => {
        const urlGetListInvitation = `http://localhost:9281/api/getAllInvitationsFromUserId?idPige=${selectedUserPige.pige.idPige}`;
        axios.get(urlGetListInvitation)
            .then(res => setListInvitation(res.data))
            .catch(err => console.log(err));

    }, []);



    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdPige?idPige=${selectedUserPige.pige.idPige}`)
            .then(response => response.json())
            .then(data => setListIUserPige(data))
            .catch(error => console.error(error))



    }, [selectedUserPige.idPige]);


    const handleClickWishList = (userPige) => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: userPige});
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }

    const handleClickStartPige = () => {
        const minimumUserPige = 3;
        if(listUserPige.length >= minimumUserPige) {
            alert('Pige doit être lancée...')
        } else {
            alert(`Impossible de lancer la pige : il doit y avoir au moins ${minimumUserPige} utilisateurs qui ont accepté leur invitation.`)
        }
    }
    const handleClickAddPeople = () => {
        sessionStorage.setItem('pigeToAddPeopleTo', JSON.stringify(selectedUserPige.pige));
        navigate('/addPeople');
    }

    const handleButtonMyWishlist = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: selectedUserPige});
    }





    const handleButtonUpdatePige = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/UpdatePige`, {state: selectedUserPige});
    }
    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100 '
             style={sectionStyle}>
            <div className="col-sm-8">
                <div className="card p-2 mt-5">
                    <div className="card-header" style={{backgroundColor: '#1C67A1'}}>
                        <h3>Coucou! Voici les détails de la pige : </h3>
                        <h1>{selectedUserPige.pige.pigeName}</h1>

                    </div>
                    <div className="card-body">
                        <div className="border border-2 p-2" id="infoPiges">
                            <h5 className="text-start">Espace Pige</h5>
                            <h5 className="text-start">Description de la pige : </h5>
                            <p className="text-start">{selectedUserPige.pige.pigeDescription}</p>
                            <div className="d-flex ">
                                <h5>Les invitations ont été envoyées le : </h5>
                                <p>{selectedUserPige.pige.pigeTimestampCreation}</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="text-start">L'organisateur de cette pige est : </h5>
                                <p>{selectedUserPige.pige.userAdmin.userFirstName}</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="text-start">Date de l'échange : </h5>
                                <p>{selectedUserPige.pige.pigeEndDate}</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="text-start">Montant suggéré : </h5>
                                <p>{selectedUserPige.pige.pigeSuggestedMoneyAmount} $</p>
                            </div>
                            {JSON.parse(sessionStorage.user).idUser === selectedUserPige.pige.userAdmin.idUser ?

                                <div className=" border border-2 p-3 " id="espaceAdmin">
                                    <h5 className="text-start"> Espace Admin pour l'organisateur de la
                                        pige {selectedUserPige.pige.pigeName} </h5>
                                    <div className="d-flex flex-column  justify-content-start align-items-start ">
                                        <button type="submit" className="liste p-2 rounded" onClick={handleClickStartPige}
                                                style={{backgroundColor: '#FFD801', color: 'white'}}>Lancer la pige!
                                        </button>
                                    </div>
                                    <div className="d-flex flex-column  justify-content-start align-items-start */}">
                                        <div className="mt-2 ">
                                            <button className="liste p-2 rounded"
                                                    style={{backgroundColor: '#FFD801', color: 'white'}}
                                                    onClick={() => handleButtonUpdatePige()}> Modifier la pige
                                            </button>
                                        </div>

                                        <button onClick={handleClickAddPeople} className="liste p-2 rounded mt-2"
                                                style={{backgroundColor: '#FFD801', color: 'white'}}>Envoyer des
                                            invitations
                                        </button>
                                        {/*Changer le href pour une alert Voulez-vous cancel oui ou non*/}
                                        <a href='/pige/:pigeName/UpdatePige'>
                                            <button type="submit" className="liste p-2 rounded mt-2"
                                                    style={{backgroundColor: '#EB0134', color: 'white'}}>Annuler la pige
                                            </button>
                                        </a>


                                    </div>
                                </div>
                                : <p></p>}
                        </div>
                        <div className=" d-flex border flex-column  border-2 p-3 mt-3 text-start" id='MonEspace'>
                            <h5>Espace de {selectedUserPige.user.userFirstName}</h5>
                            {/*Bien vefifier les navigate des boutons... ya 2 sortes et je pense que cest important pour le current user*/}
                            <div className="mt-2 ">
                                <button className="liste p-2 rounded"
                                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                                        onClick={() => handleButtonMyWishlist()}> Ma liste de souhaits pour cette
                                    pige!
                                </button>
                            </div>
                            <div className="mt-2 ">
                                <button className="liste p-2 rounded"
                                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                                        onClick={() => handleButton2Click()}> Voir qui j'ai pigé!
                                </button>
                            </div>
                            <div className="mt-2">
                                <button className="liste p-2 rounded"
                                        style={{backgroundColor: '#1C67A1', color: 'white'}}
                                        onClick={() => handleButton2Click()}> Voir toutes mes Piges
                                </button>
                            </div>

                        </div>


                        <div className="border border-2  mt-3 ">
                            <div className="card-header" style={{backgroundColor: '#1C67A1'}}>
                                <h3>Seront présents : </h3>
                            </div>
                            {listUserPige.map((userPige, index) =>
                                <div className="card " key={index} >

                                    <div className="container row border border-2 p-2 ">
                                        <img src={selectedUserPige.userPigeImage} alt="User Pige Image"/>
                                        <h6 className="card-title">Nom
                                            : {userPige.user.userFirstName} {userPige.user.userLastName} Pseudo
                                            : {userPige.userPigePseudo}</h6>
                                        <button className="liste p-2 rounded " style={{
                                            backgroundColor: '#67A600',
                                            color: 'white',
                                            width: '400px',
                                            margin: 'auto',
                                            display: 'block'
                                        }} onClick={() => handleClickWishList(userPige)}> Liste de souhaits
                                            de {userPige.user.userFirstName}</button>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="border border-2  mt-3 ">
                            <div className="card-header" style={{backgroundColor: '#808080'}}>
                                <h3>N'ont pas encore répondu : </h3>
                            </div>
                            {listInvitation.map((inv, index) =>
                                !inv.asBeenAnswered ?
                                <div key={index} className="card m-1" style={{backgroundColor: '#C0C0C0'}}>
                                    <div className="container row border border-2 p-2 ">
                                        <h6 className="card-title">
                                            Nom : {inv.firstNameOfWantedUser} {inv.lastNameOfWantedUser}
                                            Email : {inv.emailWantedUser}</h6>

                                    </div>
                                </div> : ''
                            )}

                        </div>

                    </div>
                </div>
                <BackToTopButton/>
            </div>
        </div>
    );
}

export default MyPige;
