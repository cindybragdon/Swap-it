import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ImageBGWish from "../images/BGPiges2.jpg";
import BackToTopButton from "../components/BackToTopButton";


const MyPige = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageBGWish})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }


    const navigate = useNavigate();

    const location = useLocation();
    const selectedUserPige = location.state;

    const [listUserPige, setListIUserPige] = useState([]);

    console.log(selectedUserPige);


    useEffect(() => {
        fetch(`http://localhost:9281/api/getListUserPigeFromIdPige?idPige=${selectedUserPige.pige.idPige}`)
            .then(response => response.json())
            .then(data => setListIUserPige(data))
            .catch(error => console.error(error))
        console.log(selectedUserPige.idPige)


    }, [selectedUserPige.idPige]);


    const handleClickWishList = (userPige) => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: userPige});
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }

    const handleButton3Click = () => {
        navigate(`/pige/picked`);
    }

    const handleButtonMyWishlist = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: selectedUserPige});
    }

    const handleButton5Click = () => {
        navigate(`/piges/:pigeName/UpdatePige`);
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
                                <button type="submit" className="liste p-2 rounded" style={{backgroundColor: '#FFD801', color:'white'}}>Lancer la pige!
                                </button>
                                </div>
                                <div className="d-flex flex-column  justify-content-start align-items-start */}">
                                    <div className="mt-2 ">
                                        <button className="liste p-2 rounded" style={{backgroundColor: '#FFD801', color:'white'}} onClick={() => handleButtonUpdatePige()}> Mofidier la pige
                                        </button>
                                    </div>
                                    {/*Changer le href pour une page dinvitation*/}
                                    <a href='/pige/:pigeName/UpdatePige'>
                                        <button type="submit" className="liste p-2 rounded mt-2" style={{backgroundColor: '#FFD801', color:'white'}}>Envoyer des invitations
                                        </button>
                                    </a>
                                    {/*Changer le href pour une alert Voulez-vous cancel oui ou non*/}
                                    <a href='/pige/:pigeName/UpdatePige'>
                                        <button type="submit" className="liste p-2 rounded mt-2" style={{backgroundColor: '#EB0134', color:'white'}}>Annuler la pige
                                        </button>
                                    </a>


                                </div>
                            </div>
                                : <p></p>}
                        </div>
                        <div className=" d-flex border flex-column  border-2 p-3 mt-3 text-start" id='MonEspace'>
                            <h5>Espace de {selectedUserPige.user.userFirstName}</h5>
                            {/*Bien vefifier les navigate des boutons... ya 2 sortes et je pense que cest important pour le current user*/}
                            <div className="mt-2 " >
                                <button className="liste p-2 rounded" style={{backgroundColor: '#1C67A1', color:'white'}} onClick={() => handleButtonMyWishlist()}> Ma liste de souhaits pour cette
                                    pige!</button>
                            </div>
                            <div className="mt-2 ">
                                <button  className="liste p-2 rounded" style={{backgroundColor: '#1C67A1', color:'white'}} onClick={() => handleButton3Click()}> Voir qui j'ai pigé!</button>
                            </div>
                            <div className="mt-2">
                                <button  className="liste p-2 rounded" style={{backgroundColor: '#1C67A1', color:'white'}} onClick={() => handleButton2Click()}> Voir toutes mes Piges</button>
                            </div>

                        </div>


                        <div className="border border-2  mt-3 ">
                            {listUserPige.map(userPige =>
                                <div className="card m-1">
                                    <div className="container row border border-2 p-2 ">
                                        <img src={selectedUserPige.userPigeImage} alt="User Pige Image"/>
                                        <h6 className="card-title">Nom
                                            : {userPige.user.userFirstName} {userPige.user.userLastName} Pseudo
                                            : {userPige.userPigePseudo}</h6>
                                        <button  className="liste p-2 rounded " style={{backgroundColor: '#67A600', color:'white', width: '400px' , margin: 'auto', display: 'block'}} onClick={() => handleClickWishList(userPige)}> Liste de souhaits
                                            de {userPige.user.userFirstName}</button>
                                    </div>
                                </div>
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
