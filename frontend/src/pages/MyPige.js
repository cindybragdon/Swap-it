import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import ImageBGWish from "../images/whishlistBG.jpg";
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


    const handleButtonClick = (userPige) => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/myWishList`, {state: userPige});
        console.log(userPige);
    }
    const handleButton2Click = () => {
        navigate(`/piges`);
    }

    const handleButtonUpdatePige = () => {
        navigate(`/piges/${selectedUserPige.pige.pigeName}/UpdatePige`, {state: JSON.stringify(selectedUserPige)});
        console.log('this : ' + selectedUserPige);
        alert(JSON.stringify(selectedUserPige));
    }
    return (
        <div className='container-fluid row justify-content-center text-center oui min-vh-100 '
             style={sectionStyle}>
            <div className="col-sm-8">
                <div className="card p-2 mt-5">
                    <div className="card-header">
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
                                <p>{/*{selectedUserPige.pige.userAdmin}*/}</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="text-start">Date de l'échange : </h5>
                                <p>{selectedUserPige.pige.pigeEndDate}</p>
                            </div>
                            <div className="d-flex">
                                <h5 className="text-start">Montant suggéré : </h5>
                                <p>{selectedUserPige.pige.pigeSuggestedMoneyAmount} $</p>
                            </div>
                            {/*Cet espace ne sera vu que par ladmin de la pige*/}
                            <div className=" border border-2 p-3 " id="espaceAdmin">
                                <h5 className="text-start"> Espace Admin pour l'organisateur de la
                                    pige {selectedUserPige.pige.pigeName} </h5>
                                {/*Bouton a setter OnClick qui lance le random*/}
                                <div className="d-flex flex-column  justify-content-start align-items-start */}">
                                <button type="submit" className="btn btn-warning w-30 mb-2 ">Lancer la pige!
                                </button>
                                </div>
                                <div className="d-flex flex-column  justify-content-start align-items-start */}">
                                    <a href='/pige/:pigeName/UpdatePige'>
                                        <button type="submit" className="btn btn-info w-30 mb-2 " onClick={handleButtonUpdatePige}>Modifier la pige
                                        </button>
                                    </a>
                                    {/*Changer le href pour une page dinvitation*/}
                                    <a href='/pige/:pigeName/UpdatePige'>
                                        <button type="submit" className="btn btn-info w-30 mb-2">Envoyer des invitations
                                        </button>
                                    </a>
                                    {/*Changer le href pour une alert Voulez-vous cancel oui ou non*/}
                                    <a href='/pige/:pigeName/UpdatePige'>
                                        <button type="submit" className="btn btn-danger w-30 mb-2">Annuler la pige
                                        </button>
                                    </a>


                                </div>
                            </div>
                        </div>
                        <div className=" d-flex border flex-column  border-2 p-3 mt-3 text-start" id='MonEspace'>
                            <h5>Espace de {selectedUserPige.user.userFirstName}</h5>
                            {/*Bien vefifier les navigate des boutons... ya 2 sortes et je pense que cest important pour le current user*/}
                            <a href='/piges/:pigeName/myWishList'>
                                <button type="submit" className="btn btn-info w-30 ">Ma liste de souhaits pour cette
                                    pige
                                </button>
                            </a>
                            <a href='/pige/picked'>
                                <button type="submit" className="btn btn-info w-30  mt-2">Voir qui j'ai pigé!
                                </button>
                            </a>
                            <div className="mt-2">
                                <button onClick={() => handleButton2Click()}> Voir toutes mes Piges</button>
                            </div>

                        </div>


                        <div className="border border-2  mt-3">
                            {listUserPige.map(userPige =>
                                <div className="card m-1">
                                    <div className="container row border border-2 p-2 ">
                                        <img src={selectedUserPige.userPigeImage} alt="User Pige Image"/>
                                        <h6 className="card-title">Nom
                                            : {userPige.user.userFirstName} {userPige.user.userLastName} Pseudo
                                            : {userPige.userPigePseudo}</h6>
                                        <button onClick={() => handleButtonClick(userPige)}> Liste de souhaits
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
